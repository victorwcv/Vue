import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/types/chat-message.interface';
import type { YesNoResponse } from '@/types/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNoResponse;
    return data;
  };

  // TODO:  Define the emit function with the type of the emitted event.
  const onMessage = async (text: string) => {
    if (text.trim() === '') {
      return;
    }

    messages.value.push({
      id: crypto.randomUUID(),
      message: text,
      itsMine: true,
    });

    // TODO: Evaluates if the message ends with a question mark
    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: crypto.randomUUID(),
      message: answer,
      itsMine: false,
      image,
    });
  };

  return {
    // properties
    messages,

    // methods
    onMessage,
  };
};
