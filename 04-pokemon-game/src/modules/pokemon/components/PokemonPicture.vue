<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImage" class="fade-in brightness-0 h-[200px]" />
    <img v-else :src="pokemonImage" class="fade-in h-[200px]" />
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  pokemonId: number
  showPokemon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
})

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
)
</script>
<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-sekect: none;
  -webkit-user-drag: none;
  -webkit-user-drag: none;
}
</style>
