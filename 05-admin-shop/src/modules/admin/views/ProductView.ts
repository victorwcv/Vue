import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('ProductView');

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return {
      sizes,
    };
  },
});
