<template>
  <section class="absolute bottom-10">
    <div class="grid grid-cols-2 grid-rows-2 gap-6">
      <button
        v-for="{ name, id } of options"
        :key="id"
        class="w-32 overflow-ellipsis bg-gradient-to-t from-white to-gray-300 px-4 py-2 rounded-md active:to-white shadow-md capitalize"
        @click="$emit('selectedOption', id)"
      >
        {{ name }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
}

defineProps<Props>();
defineEmits<{
  selectedOption: [id: string];
}>();
</script>

<style scoped></style>
