<template>
  <section>
    <h1 class="text-3xl font-bold">
      Pókemon <small class="text-blue-500">#{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        id
      }.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
      width="200"
      height="200"
    />
    <RouterLink
      class="bg-blue-500 text-white p-2 roundend mt-5 text-center"
      :to="{ name: 'pokemon', params: { id: +id + 1 } }"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number
}
defineProps<Props>()
</script>
