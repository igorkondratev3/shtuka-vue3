<script setup>
  import { watch } from 'vue';
  import { RouterView } from 'vue-router';
  import { lessonNum } from './stores/lessonNum';
  import { authContext } from './stores/authContext';

  const storeAuthContext = authContext();
  storeAuthContext.user = JSON.parse(localStorage.getItem('user'));

  const storeLessonNum = lessonNum();
  if (localStorage.lesson) {
    let lessonParameters = JSON.parse(localStorage.getItem('lesson'));
    storeLessonNum.changeLessonNumber(
      lessonParameters.circleNumber,
      lessonParameters.gradeNumber,
      lessonParameters.lessonNumber
    );
  }
  watch(storeLessonNum, () => {
    localStorage.setItem(
      'lesson',
      JSON.stringify({
        circleNumber: storeLessonNum.circleNumber,
        lessonNumber: storeLessonNum.lessonNumber,
        gradeNumber: storeLessonNum.gradeNumber,
      })
    );
  });
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
  />
  <RouterView />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/roundButton.css';
</style>
