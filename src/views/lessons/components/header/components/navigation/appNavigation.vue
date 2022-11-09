<script setup>
  import PreviousLessonButton from './components/previousLessonButton.vue';
  import NextLessonButton from './components/nextLessonButton.vue';
  import LessonsListButton from './components/lessonsListButton.vue';
</script>

<template>
  <nav class="header__navigation_flex navigation">
    <PreviousLessonButton />
    <LessonsListButton />
    <NextLessonButton />
  </nav>
</template>

<style>
  .header__navigation_flex {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>
