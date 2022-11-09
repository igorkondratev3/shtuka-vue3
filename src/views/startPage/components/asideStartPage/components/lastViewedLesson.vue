<script setup>
  import { computed } from 'vue';

  const isThereLessonInLocalStorage = computed(() => {
    return localStorage.lesson;
  });
  defineEmits(['goToLastViewedLesson']);
</script>

<template>
  <div
    class="start-links__last-viewed-lesson"
    v-show="isThereLessonInLocalStorage"
    @click="$emit('goToLastViewedLesson')"
  >
    <span class="material-symbols-outlined start-links_max-width"
      >arrow_right_alt</span
    >
    Последний просмотренный урок
  </div>
</template>

<style>
  .start-links__last-viewed-lesson {
    margin-bottom: 30px;
    overflow-y: hidden;
  }
</style>
