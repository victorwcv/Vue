<template>
  <nav>
    <a href="#/">Home</a>
    <a href="#/features">features</a>
    <a href="#/pricing">pricing</a>
    <a href="#/contact">contact</a>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped></style>
