<script setup>
  import { ref, onMounted } from 'vue';
  import { drawArrow } from './functions.js';
  const arrow = ref(null);
  onMounted(() => {
    drawArrow(arrow.value.getContext('2d'));
  });
</script>

<template>
  <canvas
    class="theory__arrow"
    ref="arrow"
    width="20"
    height="10"
  >
  </canvas>
</template>

<style scoped lang="scss">
  .theory {
    &__arrow {
      align-self: flex-end;
      margin-bottom: 3px;
      margin-left: 3px;
      margin-right: 3px;
    }
  }
</style>
