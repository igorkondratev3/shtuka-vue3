<script setup>
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';
  import AppNavigation from './components/navigation/appNavigation.vue';
  import AuthNav from '@/views/generalComponents/authNav/authNav.vue';
</script>

<template>
  <header class="lesson-layout__header header">
    <AuthNav />
    <AppNavigation></AppNavigation>
    <AppMenu />
  </header>
</template>

<style>
  .header {
    margin: 5px 9px;
    height: 34px; /*так как все элементы абсолютно спозиционированы задаем высоту вручную*/
  }
</style>
