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
    storeLessonNum.circleNumber = lessonParameters.circleNumber;
    storeLessonNum.gradeNumber = lessonParameters.gradeNumber;
    storeLessonNum.lessonNumber = lessonParameters.lessonNumber;
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
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <RouterView />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/roundButton.css';
</style>
