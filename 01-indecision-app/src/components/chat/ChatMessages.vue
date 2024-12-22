<template>

  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="msn in messages" :key="msn.id" v-bind="msn" />

    </div>
  </div>

</template>

<script setup lang="ts">
import type { ChatMessage } from '@/types/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[];
}

defineProps<Props>();

</script>
