<script setup>
  defineEmits(['goToFirstLesson']);
</script>

<template>
  <div
    class="start-links__first-lesson"
    @click="$emit('goToFirstLesson')"
  >
    <span class="material-symbols-outlined start-links_max-width">start</span
    >Первый урок
  </div>
</template>

<style>
  .start-links__first-lesson {
    margin-bottom: 30px;
    overflow-y: hidden;
  }
  .start-links_max-width {
    max-width: 25px;
    overflow: hidden;
  }
</style>
