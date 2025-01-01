<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-b-blue-500">
        <!-- Header -->
        <slot name="header" />
      </div>
      <div class="my-4">
        <!-- Body -->
        <slot name="body" />
      </div>
      <div class="border-t border-t-blue-500 pt-4">
        <!-- Actions -->
        <slot name="actions" />
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black/50 w-screen h-screen"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>

<style scoped></style>
