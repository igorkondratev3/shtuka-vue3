<script setup>
  import { ref, onMounted, computed } from 'vue';
  import {
    changeColor,
    changeLessonNumberForNextLesson,
  } from '@/views/generalFunctions/functions.js';
  import { drawArrowRight } from './functions.js';
  import { lessonsCollection } from '@/stores/lessonsCollection';
  import { lessonNum } from '@/stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();
  const arrowRight = ref(null);
  const nextLesson = ref(null);

  onMounted(() => {
    changeColor(nextLesson.value);
    drawArrowRight(arrowRight.value.getContext('2d'));
  });

  const nextLessonTitle = computed(() => {
    const [circle, grade, lesson] = changeLessonNumberForNextLesson(
      storeLessonNum,
      storeLessonsCollection
    );

    let headings =
      storeLessonsCollection.lessons['circle' + circle]['grade' + grade][
        'lesson' + lesson
      ]?.headings;

    let title = '';
    if (headings) {
      for (let head of headings) {
        title = title + head + ' ';
      }
    }
    return title;
  });

  async function goToNextLesson() {
    const [circle, grade, lesson] = changeLessonNumberForNextLesson(
      storeLessonNum,
      storeLessonsCollection
    );
    storeLessonNum.circleNumber = circle;
    storeLessonNum.gradeNumber = grade;
    storeLessonNum.lessonNumber = lesson;
  }
</script>

<template>
  <div
    class="navigation__next-lesson-button round-button"
    ref="nextLesson"
    @click="goToNextLesson()"
    :title="nextLessonTitle"
  >
    <canvas
      ref="arrowRight"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style>
  .navigation__next-lesson-button {
    border: 0;
  }
</style>
