import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

export default defineComponent({
  setup: () => {
    console.log('setup')

    const counter = ref(0)

    onMounted(() => {
      console.log('onMounted')
    })

    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })
    onServerPrefetch(() => {
      console.log('onServerPrefetch')
    })

    return {
      counter,
    }
  },
})
