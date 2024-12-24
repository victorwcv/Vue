import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
  });

  const getPokemons = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsMap: Pokemon[] = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const pokemonID = urlParts[urlParts.length - 2];

      return {
        id: pokemonID,
        name: pokemon.name,
      };
    });

    return pokemonsMap.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: string) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { x: 0.5, y: 0.5 },
      });
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    // await new Promise((r) => setTimeout(r, 1500));
    pokemons.value = await getPokemons();
    getNextOptions();
    console.log(pokemonsOptions.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,

    // methods
    getNextOptions,
    checkAnswer,
  };
};
