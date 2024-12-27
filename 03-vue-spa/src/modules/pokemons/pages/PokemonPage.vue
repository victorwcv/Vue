<template>
  <section class="flex flex-col">
    <h1 class="text-3xl text-cente m-10">
      Pokemon <small class="text-victor-400">#{{ id }}</small>
    </h1>
    <img
      class="block h-52 w-52 m-auto object-contain"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="pokemon"
    />
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="block text-center text-white bg-victor-400 rounded-md px-4 py-2 mt-10 active:scale-90 hover:bg-victor-500 transition-all"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: number;
}

defineProps<Props>();
</script>

<style scoped></style>
