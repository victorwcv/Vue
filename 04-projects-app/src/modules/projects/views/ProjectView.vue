<template>
  <div class="w-full">
    <section class="px-8 py-4">
      <BreadCrums :name="project?.name ?? 'no Name'" />
    </section>

    <section class="px-8 py-4">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th class="min-w-72">Completada en</th>
            </tr>
          </thead>
          <tbody>
            <!-- row  -->
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="block checkbox checkbox-primary mx-auto"
                  @change="projectsStore.toggleTask(project!.id, task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>
                {{ taskDate(task.completedAt) }}
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <input
                  v-model="newTaskName"
                  @keyup.enter="onNewTask"
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva Tarea"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrums from '@/modules/common/components/BreadCrums.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../types/project.interface';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectsStore = useProjectsStore();
const project = ref<Project | null>();

const newTaskName = ref('');

watch(
  () => props.id,
  () => {
    project.value = projectsStore.projectList.find((project) => project.id === props.id);
    if (!project.value) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);

const onNewTask = () => {
  projectsStore.addTask(newTaskName.value, props.id);
  newTaskName.value = '';
};

const taskDate = (date: string | Date | null) => {
  if (!date) return null;

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  // Validar que es un objeto Date válido
  if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};
</script>

<style scoped></style>
