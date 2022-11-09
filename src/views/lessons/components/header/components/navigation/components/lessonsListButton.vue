<script setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import { changeColor } from '@/views/generalFunctions/functions.js';

  const lessonsList = ref(null);
  onMounted(() => {
    changeColor(lessonsList.value);
  });
</script>

<template>
  <div
    class="navigation__lessons-list-button round-button"
    ref="lessonsList"
    title="Список уроков"
  >
    <router-link
      class="navigation__link"
      to="/lessonsList"
    >
      <span class="material-symbols-outlined">library_books</span>
    </router-link>
  </div>
</template>

<style>
  .navigation__lessons-list-button {
    text-decoration: none;
    overflow-x: hidden;
    color: black;
    border: 0;
    padding-top: 5px;
    padding-left: 4px;
  }

  .navigation__link {
    cursor: default;
    color: black;
  }
</style>
