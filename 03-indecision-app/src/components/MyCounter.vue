<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++" class="btn">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter'

const { counter, squareCounter } = useCounter()
</script>

<!-- <script lang="ts" setup>
import { computed, ref } from 'vue'

// const props = defineProps({
//   value: { type: Number, required: true },
// })

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

<style>
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
</style>
