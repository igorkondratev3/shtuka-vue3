<script setup>
  import { ref, onMounted } from 'vue';
  import { drawDeception } from './functions.js';
  const deception = ref(null);
  onMounted(() => {
    drawDeception(deception.value.getContext('2d'));
  });
</script>

<template>
  <canvas
    class="example__deception"
    ref="deception"
    width="290"
    height="350"
  >
  </canvas>
</template>

<style scoped></style>
