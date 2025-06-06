import { sleep } from '@/helpers/sleep'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = (await resp.json()) as YesNoResponse
    return data
  }

  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime() + Math.random(),
      message: text,
      itsMine: true,
    })

    if (!text.endsWith('?')) return

    await sleep(1.5)
    const { answer, image } = await getHerResponse()

    messages.value.push({
      id: new Date().getTime() + Math.random(),
      message: answer,
      itsMine: false,
      image: image,
    })
  }
  return {
    messages,
    onMessage,
  }
}

// https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif
