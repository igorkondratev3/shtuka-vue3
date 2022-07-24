<script setup>
  import AppHeader from './components/header/appHeader.vue';
  import AppMain from './components/main/appMain.vue';
  import AppFooter from './components/footer/appFooter.vue';
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
  }
</style>
