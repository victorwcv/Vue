<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyectos</th>
          <th>Tareas</th>
          <th>Avances</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="hover">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
      </tbody>
    </table>

    <FabButton @click="() => console.log('clicked')">
      <AddCircle />
    </FabButton>
  </div>
</template>

<script setup lang="ts">
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
</script>

<style scoped></style>
