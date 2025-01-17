<template>
  <div class="py-8 px-8 bg-white">
    <h1 class="text-2xl font-semibold mb-8">Products</h1>

    <!-- component -->
    <div class="w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Image</th>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Title</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Sizes</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="product in products" :key="product.id" class="even:bg-gray-100">
              <td class="text-left py-3 px-4">
                <img :src="product.images[0]" :alt="product.title" class="h-10 w-10 object-cover" />
              </td>
              <td class="w-1/3 text-left py-3 px-4">
                <RouterLink
                  :to="`/admin/products/${product.id}`"
                  class="hover:text-blue-500 hover:underline"
                >
                  {{ product.title }}
                </RouterLink>
              </td>
              <td class="text-left py-3 px-4">$ {{ product.price }}</td>
              <td class="text-left py-3 px-4">
                <span
                  v-for="size in product.sizes"
                  :key="size"
                  class="mr-2 bg-blue-500 text-white px-4 py-1 rounded-md"
                >
                  {{ size }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Pagination -->
  <ButtonPagination :has-more-data="!!products && products.length < 10" :page="page" />
</template>

<script lang="ts" setup>
import ButtonPagination from '@/modules/common/components/ButtonPagination.vue';
import { getProductsAction } from '@/modules/products/actions';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { watchEffect } from 'vue';
import { usePagination } from '@/modules/common/composables/usePagination';

const { page } = usePagination();
const queryClient = useQueryClient();

const { data: products } = useQuery({
  queryKey: ['products', { page: page }],
  queryFn: () => getProductsAction(page.value),
});

watchEffect(() => {
  queryClient.prefetchQuery({
    queryKey: ['products', { page: page.value + 1 }],
    queryFn: () => getProductsAction(page.value + 1),
  });
});
</script>
