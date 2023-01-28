<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <router-link
    class="start-links__lessons-list"
    to="/lessonsList"
  >
    <img
      class="icon_large-size"
      src="/src/assets/library.svg"
    />
    Список уроков
  </router-link>
</template>

<style>
  .start-links__lessons-list {
    color: black;
    text-decoration: none;
    overflow-y: hidden;
  }
</style>
