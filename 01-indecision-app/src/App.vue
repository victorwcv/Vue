<template>
  <h1>Hello Vue</h1>
  <hr>
  <MyCounter :value="10" />
  <MyCounterScript :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';


</script>
