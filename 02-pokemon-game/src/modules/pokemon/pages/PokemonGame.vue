<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl text-gray-600 font-semibold">-Espere por favor-</h1>
    <h3 class="animate-pulse text-gray-500 mt-2">Cargando Pokemons...</h3>
  </section>

  <section v-else class="flex flex-col items-center w-full h-full game">
    <h1
      class="mt-12 p-4 rounded-md bg-gradient-to-tr from-blue-700 to-blue-900 text-yellow-400 font-bold text-3xl"
    >
      ¿Quién es este Pokemon?
    </h1>
    <button
      v-if="gameStatus !== GameStatus.Playing"
      class="text-xl rounded-md bg bg-yellow-400 px-4 py-2 mt-8"
      @click="getNextRound()"
    >
      Jugar de nuevo
    </button>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      @selected-option="onSelectedOptions($event)"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  isLoading,
  randomPokemon,
  gameStatus,
  pokemonsOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemonGame();

const onSelectedOptions = (value: string) => {
  checkAnswer(value);
};
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
