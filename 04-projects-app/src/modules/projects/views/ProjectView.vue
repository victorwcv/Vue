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
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <!-- row  -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <tr class="hover">
              <th></th>
              <td>
                <input
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
</script>

<style scoped></style>
