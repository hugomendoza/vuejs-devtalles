<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subTitle" class="py-4">{{ subTitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Nombre del proyecto'"
            class="input input-bordered input-primary w-full"
            v-model="inputValue"
          />
          <div class="flex justify-end mt-5 gap-4">
            <button type="button" @click="modalClose" class="btn">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 h-screen w-screen bg-black/50"
  ></div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

interface Props {
  open: boolean
  title: string
  subTitle?: string
  placeholder?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: [void]
  value: [text: string]
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

watch(props, ({ open }) => {
  if (open) {
    setTimeout(() => {
      inputRef.value?.focus()
    }, 100)
  }
})

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus()
    return
  }

  emit('value', inputValue.value.trim())
  emit('close')

  inputValue.value = ''
}

const modalClose = () => {
  emit('close')
}
</script>
