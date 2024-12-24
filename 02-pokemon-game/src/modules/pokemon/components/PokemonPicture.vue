<template>
  <div class="absolute left-10 top-96">
    <img
      v-if="!showPokemon"
      :src="pokemonImage"
      alt="Pokemon aleatorio"
      class="w-52 h-52 object-contain brightness-0"
      draggable="false"
    />
    <img
      v-else
      :src="pokemonImage"
      alt="Pokemon aleatorio"
      class="w-52 h-52 object-contain fade-in"
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: string;
  showPokemon: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonImage = computed(() => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`;
});
</script>

<style scoped></style>
