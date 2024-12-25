<template>
  <section class="absolute bottom-10">
    <div class="grid grid-cols-2 grid-rows-2 gap-6">
      <button
        v-for="{ name, id } of options"
        :key="id"
        :class="[
          'w-32 overflow-ellipsis bg-gray-100 px-4 py-2 rounded-md hover:bg-white shadow-md capitalize disabled:shadow-none disabled:bg-gray-300 disabled:text-gray-400 transition-all duration-300',
          { correct: id === correctAnswer && blockSelection },
        ]"
        @click="$emit('selectedOption', id)"
        :disabled="blockSelection"
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
  blockSelection: boolean;
  correctAnswer: string;
}

defineProps<Props>();
defineEmits<{
  selectedOption: [id: string];
}>();
</script>

<style scoped>
.correct {
  @apply bg-green-500 text-white;
}
</style>
