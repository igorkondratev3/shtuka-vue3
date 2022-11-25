<script setup>
  import AppHeader from './components/header/appHeader.vue';
  import AppMain from './components/main/appMain.vue';
  import AppFooter from './components/footer/appFooter.vue';
  import { watch, onMounted, onBeforeUnmount} from 'vue';
  import { getLesson } from '../generalFunctions/requestsToBackend';
  import {
    calculateLessonNumberForPreviousLesson,
    calculateLessonNumberForNextLesson,
  } from '../generalFunctions/calculateLessonNumber';
  import { lessonsCollection } from '../../stores/lessonsCollection';
  import { lessonNum } from '../../stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();

  if (!localStorage.lesson) {
    //на случай если загружается страница урока напрямую и если раньше не был на сайте
    storeLessonNum.changeLessonNumber(1, 7, 1)
  }

  setLesson(
    storeLessonNum.circleNumber,
    storeLessonNum.gradeNumber,
    storeLessonNum.lessonNumber
  );
  setLesson(
    ...calculateLessonNumberForPreviousLesson(
      storeLessonNum,
      storeLessonsCollection
    )
  );
  setLesson(
    ...calculateLessonNumberForNextLesson(storeLessonNum, storeLessonsCollection)
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
        storeLessonsCollection
      )
    );
    setLesson(
      ...calculateLessonNumberForNextLesson(storeLessonNum, storeLessonsCollection)
    );
  });

  async function setLesson(circleNumber, gradeNumber, lessonNumber) {
    if (!storeLessonsCollection.isThereLesson(circleNumber, gradeNumber, lessonNumber)) {
      storeLessonsCollection.setLesson(
        await getLesson(circleNumber, gradeNumber, lessonNumber)
      );
    }
  }

  let calculateLessonNumber;

  const handleGoToLesson = (event) => {
      if (event.code==="ArrowLeft" && event.ctrlKey) {
        calculateLessonNumber = calculateLessonNumberForPreviousLesson;
        goToLesson();
      }
      if (event.code==="ArrowRight" && event.ctrlKey) {
        calculateLessonNumber = calculateLessonNumberForNextLesson;
        goToLesson();
      }   
    }

  const goToLesson = () => {
    const [circleNumber, gradeNumber, lessonNumber] = calculateLessonNumber(
      storeLessonNum,
      storeLessonsCollection
    );
    storeLessonNum.changeLessonNumber(circleNumber, gradeNumber, lessonNumber);
  }

  onMounted(() => {
    document.addEventListener('keydown', handleGoToLesson)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleGoToLesson);
  })
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
