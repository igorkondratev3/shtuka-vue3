<script setup>
  import { ref, onMounted } from 'vue';
  import { drawPen } from './functions.js';
  import { changeColor } from '@/views/generalFunctions/functions.js';
  const pen = ref(null);
  const buttonShowNotes = ref(null);
  onMounted(() => {
    drawPen(pen.value.getContext('2d'));
    changeColor(buttonShowNotes.value);
  });
</script>

<template>
  <div
    class="shell-theory__button button button_border"
    ref="buttonShowNotes"
  >
    <canvas
      class="button__show-hint pen"
      ref="pen"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style scoped lang="scss">
  .shell-theory {
    &__button {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
  .button {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: default;
    z-index: 9;
  }
  .button {
    &_border {
      border: 0.5px solid black;
    }
  }
</style>
