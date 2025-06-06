<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>

<!-- <script lang="ts">
import { computed, ref } from 'vue'

interface Props {
  value: number
}

const props = defineProps<Props>()

const counter = ref(props.value)
const squareCounter = computed(() => counter.value * counter.value)

const increaseCounter = () => {
  return counter.value++
}

const decreaseCounter = () => {
  return counter.value--
}
</script> -->
