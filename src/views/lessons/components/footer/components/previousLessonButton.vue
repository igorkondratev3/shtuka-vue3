<script setup>
  import { ref, onMounted } from 'vue';
  import { changeColor } from '@/views/generalFunctions/functions.js';
  import { drawArrowLeft, goToPreviousLesson } from './functions.js';
  import { lessonInformation } from '@/stores/lessonInformation';
  import { lessonNum } from '@/stores/lessonNum';
  const storeLessonInformation = lessonInformation();
  const storeLessonNum = lessonNum();
  const arrowLeft = ref(null);
  const previousLesson = ref(null);
  onMounted(() => {
    changeColor(previousLesson.value);
    drawArrowLeft(arrowLeft.value.getContext('2d'));
  });
</script>

<template>
  <div
    class="footer__button button button_border"
    ref="previousLesson"
    @click="goToPreviousLesson(storeLessonNum, storeLessonInformation)"
  >
    <canvas
      class="button__arrow"
      ref="arrowLeft"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style scoped lang="scss">
  .button {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: default;
    z-index: 9;
  }

  .button_border {
    border: 0.5px solid black;
  }

  .button {
    &__arrow {
      z-index: 5;
    }
  }
</style>
