<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl text-gray-600 font-semibold">-Espere por favor-</h1>
    <h3 class="animate-pulse text-gray-500 mt-2">Cargando Pokemons...</h3>
  </section>

  <section v-else class="flex flex-col items-center w-full h-full game">
    <h1
      class="mt-12 p-4 rounded-md bg-gradient-to-tr from-blue-700 to-blue-900 text-yellow-400 font-bold text-3xl"
    >
      ¿Quién es este Pokemon?
    </h1>

    <!-- Pokemon Picture -->
    <PokemonPicture />

    <!-- Pokemon Options -->
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { isLoading } = usePokemonGame();
</script>

<style scoped>
.game {
  height: 960px;
  width: 500px;
  background-image: url('/pokemon-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
