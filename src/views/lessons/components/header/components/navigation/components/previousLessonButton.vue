<script setup>
  import { ref, onMounted, computed } from 'vue';
  import {
    changeColor,
    changeLessonNumberForPreviousLesson,
  } from '@/views/generalFunctions/functions.js';
  import { drawArrowLeft } from './functions.js';
  import { lessonsCollection } from '@/stores/lessonsCollection';
  import { lessonNum } from '@/stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();
  const arrowLeft = ref(null);
  const previousLesson = ref(null);

  onMounted(() => {
    changeColor(previousLesson.value);
    drawArrowLeft(arrowLeft.value.getContext('2d'));
  });

  const previousLessonTitle = computed(() => {
    const [circle, grade, lesson] = changeLessonNumberForPreviousLesson(
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

  async function goToPreviousLesson() {
    const [circle, grade, lesson] = changeLessonNumberForPreviousLesson(
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
    class="navigation__previous-lesson-button round-button"
    ref="previousLesson"
    @click="goToPreviousLesson()"
    :title="previousLessonTitle"
  >
    <canvas
      ref="arrowLeft"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style>
  .navigation__previous-lesson-button {
    border: 0;
  }
</style>
