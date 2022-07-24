<script setup>
  import PreviousLessonButton from './components/previousLessonButton.vue';
  import NextLessonButton from './components/nextLessonButton.vue';
</script>

<template>
  <footer class="footer">
    <PreviousLessonButton />
    <NextLessonButton /><!--очень похожие компоненты-поработать над объединением в один-->
  </footer>
</template>

<style scoped>
  .footer {
    margin: 10px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
