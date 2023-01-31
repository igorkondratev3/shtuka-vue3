<script setup>
  import MenuVue from '@/views/generalComponents/menu/menu.vue';
  import LessonNavigation from './components/navigation/navigation.vue';
  import AuthNav from '@/views/generalComponents/authNav/authNav.vue';
</script>

<template>
  <header class="lesson-layout__header header header_margin header_height">
    <AuthNav />
    <LessonNavigation />
    <MenuVue />
  </header>
</template>

<style scoped>
  @import '@/assets/css/header.css';
</style>
