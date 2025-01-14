<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-8 sm:px-6"
  >
    <div class="flex flex-1 justify-between">
      <button
        :disabled="page === 1"
        @click="$router.push({ query: { page: page - 1 } })"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:bg-gray-300 disabled:text-gray-500"
      >
        Previous
      </button>
      <button
        :disabled="hasMoreData"
        @click="$router.push({ query: { page: page + 1 } })"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:bg-gray-300 disabled:text-gray-500"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  page: number;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>
