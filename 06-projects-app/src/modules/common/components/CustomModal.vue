<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <slot name="header" />
      </div>
      <div class="my-5">
        <slot name="body" />
      </div>
      <div class="border-t border-t-blue-500 pt-2">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 h-screen w-screen bg-black/50"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean
}

withDefaults(defineProps<Props>(), {
  open: false,
})
</script>
