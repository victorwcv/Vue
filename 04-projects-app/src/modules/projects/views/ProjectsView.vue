<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Nombre de Proyecto</th>
          <th>Tareas Totales</th>
          <th>% de Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress
              class="progress progress-primary w-56"
              :value="project.completion"
              max="100"
            ></progress>
            {{ project.completion }} %
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    title="Nuevo Proyecto"
    subtitle="Ingrese el nombre de su nuevo proyecto
    "
  />

  <CustomModal :open="CustomModalOpen">
    <template #header>
      <h1>Este es el Titulo</h1>
    </template>
    <template #body>
      <p>Este es el cuerpo del modal</p>
    </template>
    <template #actions>
      <button @click="CustomModalOpen = false" class="btn">Close</button>
      <button @click="CustomModalOpen = false" class="btn btn-primary">Aceptar</button>
    </template>
  </CustomModal>

  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>

  <FabButton @click="CustomModalOpen = true" position="bottom-left">
    <AddCircle />
  </FabButton>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const CustomModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>

<style scoped></style>
