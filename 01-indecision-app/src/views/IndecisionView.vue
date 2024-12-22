<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">

    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat messages -->
    <ChatMessages :messages="messages" />

    <!-- Chat input -->
    <MessageBox />

  </div>
</template>


<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/types/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: crypto.randomUUID(),
    message: 'Hi, how are you?',
    itsMine: true
  },
  {
    id: crypto.randomUUID(),
    message: 'Good, how about you?',
    itsMine: false
  },
  {
    id: crypto.randomUUID(),
    message: 'I am fine, what about you?',
    itsMine: true
  }
]);

</script>
