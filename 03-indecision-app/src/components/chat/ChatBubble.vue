<template>
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="size-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  message: string
  itsMine: boolean
  image?: string
}

defineProps<Props>()
</script>
