<template>
  <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-8 sm:px-6">
    <div class="flex flex-1 justify-between">
      <button
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
      <button
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props { }

defineProps<Props>();

</script>
