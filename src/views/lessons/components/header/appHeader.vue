<script setup>
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';
  import AppNavigation from './components/navigation/appNavigation.vue';
  import AuthNav from '@/views/generalComponents/authNav/authNav.vue';
</script>

<template>
  <header class="lesson-layout__header header">
    <AuthNav />
    <AppNavigation class="header__navigation"></AppNavigation>
    <AppMenu />
  </header>
</template>

<style lang="scss">
  .header {
    margin: 5px 9px;
    height: 34px; /*так как все элементы абсолютно спозиционированы задаем высоту вручную*/
  }

  .header {
    &__navigation {
      position: fixed;
      z-index: 100;
      left: calc(50% - 34px);
      top: 5px;
    }
  }
</style>
