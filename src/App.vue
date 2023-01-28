<script setup>
  import { RouterView } from 'vue-router';
  import { lessonNum } from './stores/lessonNum.js';
  import { authContext } from './stores/authContext.js';
  import { shtukaChannel } from '@/shtukaChannel.js';
  import { deleteUserInformationFromStores } from '@/views/generalFunctions/deleteUserInformationFromStores.js';

  const storeAuthContext = authContext();
  if (localStorage.getItem('user'))
    storeAuthContext.login(JSON.parse(localStorage.getItem('user')));

  const storeLessonNum = lessonNum();
  if (localStorage.getItem('lesson')) {
    const lessonParameters = JSON.parse(localStorage.getItem('lesson'));
    storeLessonNum.changeLessonNumber(
      lessonParameters.circleNumber,
      lessonParameters.gradeNumber,
      lessonParameters.lessonNumber
    );
  }

  shtukaChannel.onmessage = (event) => {
    if (event.data === 'logout') deleteUserInformationFromStores();
    if (event.data === 'login')
      storeAuthContext.login(JSON.parse(localStorage.getItem('user')));
  };
</script>

<template>
  <RouterView />
</template>

<style>
  @import '@/assets/roundButton.css';
  @import '@/assets/icons.css';
</style>
