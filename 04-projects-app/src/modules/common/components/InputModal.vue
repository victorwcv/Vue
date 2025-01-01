<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subtitle" class="py-4">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end gap-5 mt-5">
            <button @click="$emit('close')" class="btn">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black/50 w-screen h-screen"
  ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
  placeholder?: string;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  if (!inputValue.value) {
    // TODO: foco en el elemento
    inputRef.value?.focus();

    return;
  }
  console.log(inputValue.value);
  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>

<style scoped></style>
