<template>
  <h1>Hello Vue</h1>
  <hr>
  <MyCounter :value="10" />
  <MyCounterScript :value="3" />
  <MyCounterScript2 :value="6" />
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';


</script>
