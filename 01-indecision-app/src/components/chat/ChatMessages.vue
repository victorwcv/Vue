<template>

  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" :message="'Hi, how are you?'" />
      <ChatBubble :its-mine="false" :message="'Good, how about you?'"
        image="https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif" />

    </div>
  </div>

</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
