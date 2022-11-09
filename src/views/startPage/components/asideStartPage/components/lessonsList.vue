<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <router-link
    class="start-links__lessons-list"
    to="/lessonsList"
  >
    <span class="material-symbols-outlined start-links_max-width"
      >library_books</span
    >
    Список уроков
  </router-link>
</template>

<style>
  .start-links__lessons-list {
    color: white;
    text-decoration: none;
    overflow-y: hidden;
  }
</style>
