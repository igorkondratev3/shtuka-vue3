<script setup>
  import LessonsListButton from './components/lessonsListButton.vue';
  import LessonsButton from './components/lessonsButton.vue';
</script>

<template>
  <nav class="header__navigation_flex navigation">
    <LessonsButton where="previous" />
    <LessonsListButton />
    <LessonsButton where="next" />
  </nav>
</template>

<style>
  .header__navigation_flex {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>
