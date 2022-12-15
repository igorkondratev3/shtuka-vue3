<script setup>
  import AppHeader from './components/header/appHeader.vue';
  import AppMain from './components/main/appMain.vue';
  import AppFooter from './components/footer/appFooter.vue';
  import { watch, onMounted, onBeforeUnmount } from 'vue';
  import { getLesson } from '../generalFunctions/requestsToBackend';
  import {
    calculateLessonNumberForPreviousLesson,
    calculateLessonNumberForNextLesson,
  } from '../generalFunctions/calculateLessonNumber';
  import { changeLesson } from '@/views/generalFunctions/changeLesson';
  import { lessonsCollection } from '../../stores/lessonsCollection';
  import { lessonNum } from '../../stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();

  if (!localStorage.lesson) {
    //на случай если загружается страница урока напрямую и если раньше не был на сайте
    storeLessonNum.changeLessonNumber(1, 7, 1);
  }

  setLesson(
    storeLessonNum.circleNumber,
    storeLessonNum.gradeNumber,
    storeLessonNum.lessonNumber
  );
  setLesson(
    ...calculateLessonNumberForPreviousLesson(
      storeLessonNum,
      storeLessonsCollection.numberOf
    )
  );
  setLesson(
    ...calculateLessonNumberForNextLesson(
      storeLessonNum,
      storeLessonsCollection.numberOf
    )
  );

  watch(storeLessonNum, () => {
    setLesson(
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber,
      storeLessonNum.lessonNumber
    );
    setLesson(
      ...calculateLessonNumberForPreviousLesson(
        storeLessonNum,
        storeLessonsCollection.numberOf
      )
    );
    setLesson(
      ...calculateLessonNumberForNextLesson(
        storeLessonNum,
        storeLessonsCollection.numberOf
      )
    );
  });

  async function setLesson(circleNumber, gradeNumber, lessonNumber) {
    if (
      !storeLessonsCollection.isThereLesson(
        circleNumber,
        gradeNumber,
        lessonNumber
      )
    ) {
      storeLessonsCollection.setLesson(
        await getLesson(circleNumber, gradeNumber, lessonNumber)
      );
    }
  }

  const handleChangeLesson = (event) => {
    if (event.code === 'ArrowLeft' && event.altKey && event.shiftKey)
      changeLesson(calculateLessonNumberForPreviousLesson);

    if (event.code === 'ArrowRight' && event.altKey && event.shiftKey)
      changeLesson(calculateLessonNumberForNextLesson);
  };

  onMounted(() => {
    document.addEventListener('keydown', handleChangeLesson);
  });
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleChangeLesson);
  });
</script>

<template>
  <div class="lesson-layout">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style>
  .lesson-layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
  }
</style>
