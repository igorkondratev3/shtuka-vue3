<script setup>
  import { ref, onMounted } from 'vue';
  import { changeColor } from '@/views/generalFunctions/functions.js';
  import { drawPen } from './functions.js';

  const pen = ref(null);
  const buttonShowCreateNotes = ref(null);

  onMounted(() => {
    drawPen(pen.value.getContext('2d'));
    changeColor(buttonShowCreateNotes.value);
  });
</script>

<template>
  <div
    class="lesson-theory__button-show-create-notes round-button round-button_align-self"
    ref="buttonShowCreateNotes"
  >
    <canvas
      ref="pen"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style lang="scss">
  .round-button_align-self {
    align-self: center;
  }
</style>
