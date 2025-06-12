<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    sub-title="Ingresa un nuevo proyecto"
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue($event)"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>

    <template #body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam alias veniam corrupti
        voluptatum.
      </p>
    </template>

    <template #actions>
      <div class="flex justify-end mt-5 gap-4">
        <button type="button" @click="customModalOpen = false" class="btn">Close</button>
        <button type="submit" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true">
    <add-circle />
  </fab-button>
  <fab-button @click="customModalOpen = true" position="bottom-left">
    <modal-icon />
  </fab-button>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue'
import FabButton from '@/modules/common/components/FabButton.vue'
import InputModal from '@/modules/common/components/InputModal.vue'
import AddCircle from '@/modules/common/icons/AddCircle.vue'
import ModalIcon from '@/modules/common/icons/ModalIcon.vue'
import { ref } from 'vue'

const modalOpen = ref(false)
const customModalOpen = ref(false)

const onNewValue = (projectName: string) => {
  console.log({ projectName })
}
</script>
