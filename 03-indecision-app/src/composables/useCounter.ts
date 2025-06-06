import { computed, ref } from 'vue'

export const useCounter = (initialValue: number = 10) => {
  const counter = ref(initialValue)
  const squareCounter = computed(() => counter.value * counter.value)

  return {
    counter,
    squareCounter,
  }
}
