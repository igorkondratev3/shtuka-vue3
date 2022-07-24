<script setup>
  import AppTitel from './components/appTitel.vue';
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';
</script>

<template>
  <header class="header">
    <AppTitel />
    <AppMenu />
  </header>
</template>

<style scoped>
  .header {
    margin: 5px 9px 5px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
