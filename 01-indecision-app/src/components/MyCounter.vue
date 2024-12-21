<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counterSquare }}</h3>

    <div>
      <button @click="decrement">-1</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+1</button>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    required: true,
  }
})


const counter = ref(props.value);
const counterSquare = computed(() => counter.value ** 2);
const increment = () => {
  counter.value++;
};
const decrement = () => {
  if (counter.value === 0) return;
  counter.value--;
}

const reset = () => counter.value = props.value;



</script>
