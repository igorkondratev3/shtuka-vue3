<script setup>
  import AppHeader from './components/header/appHeader.vue';
  import AppMain from './components/main/appMain.vue';
  import AppFooter from './components/footer/appFooter.vue';
  import { watch } from 'vue';
  import {
    getLesson,
    changeLessonNumberForPreviousLesson,
    changeLessonNumberForNextLesson,
  } from '../generalFunctions/functions';
  import { lessonsCollection } from '../../stores/lessonsCollection';
  import { lessonNum } from '../../stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();

  if (!localStorage.lesson) {
    //на случай если загружается страница урока напрямую и если раньше не был на сайте
    storeLessonNum.circleNumber = 1;
    storeLessonNum.gradeNumber = 7;
    storeLessonNum.lessonNumber = 1;
  }

  setLesson(
    storeLessonNum.circleNumber,
    storeLessonNum.gradeNumber,
    storeLessonNum.lessonNumber
  );
  setLesson(
    ...changeLessonNumberForPreviousLesson(
      storeLessonNum,
      storeLessonsCollection
    )
  );
  setLesson(
    ...changeLessonNumberForNextLesson(storeLessonNum, storeLessonsCollection)
  );

  watch(storeLessonNum, () => {
    setLesson(
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber,
      storeLessonNum.lessonNumber
    );
    setLesson(
      ...changeLessonNumberForPreviousLesson(
        storeLessonNum,
        storeLessonsCollection
      )
    );
    setLesson(
      ...changeLessonNumberForNextLesson(storeLessonNum, storeLessonsCollection)
    );
  });

  async function setLesson(circleNumber, gradeNumber, lessonNumber) {
    if (
      !storeLessonsCollection.lessons['circle' + circleNumber][
        'grade' + gradeNumber
      ]['lesson' + lessonNumber]
    ) {
      storeLessonsCollection.setLesson(
        await getLesson(circleNumber, gradeNumber, lessonNumber)
      );
    }
  }
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
