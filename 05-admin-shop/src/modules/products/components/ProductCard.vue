<template>
  <article
    class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
  >
    <a href="#">
      <picture class="relative flex items-end overflow-hidden rounded-xl min-w-[230px] h-auto">
        <img :src="product?.images[0]" alt="Product Image" class="w-full h-full object-cover" />
      </picture>

      <div class="mt-1 p-2">
        <h2 class="text-slate-700 truncate">{{ product?.title }}</h2>
        <p class="mt-1 text-sm text-slate-400 min-h-10 line-clamp-3">{{ product?.description }}</p>

        <div class="mt-3 flex items-end justify-between">
          <p class="text-lg font-bold text-blue-500">${{ product?.price }}</p>
          <div
            class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
          >
            <IconCart />

            <button class="text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
import IconCart from '@/icons/IconCart.vue';
import type { Product } from '@/modules/products/types/product.interface';

interface Props {
  product: Product | null;
}

defineProps<Props>();
</script>
