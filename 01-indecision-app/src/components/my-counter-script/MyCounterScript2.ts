import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const counterSquare = computed(() => counter.value ** 2);

    return {
      counter,
      counterSquare,
    };
  },
});
