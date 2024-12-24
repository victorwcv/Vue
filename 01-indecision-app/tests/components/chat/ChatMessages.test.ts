import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/types/chat-message.interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  {
    id: '1',
    message: 'hola',
    itsMine: true,
  },
  {
    id: '2',
    message: 'mundo',
    itsMine: false,
  },
];
const wrapper = mount(ChatMessages, {
  props: { messages },
});

describe('Testing <ChatMessages/> component', () => {
  it('should render chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });
});
