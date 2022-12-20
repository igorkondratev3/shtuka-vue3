<script setup>
  import AuthNav from '@/views/generalComponents/authNav/authNav.vue';
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';
  import AppAside from './components/asideStartPage/asideStartPage.vue';
  import AppMain from './components/mainStartPage.vue';
</script>

<template>
  <div class="start-page">
    <header class="start-page__header">
      <AuthNav />
      <AppMenu />
    </header>
    <aside class="start-page__aside">
      <AppAside />
    </aside>
    <main class="start-page__main">
      <AppMain />
    </main>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

  .start-page {
    display: grid;
    grid-template-areas:
      'header header'
      '.      main'
      'aside  main'
      '.      main';
    grid-template-rows: 34px 4fr 5fr 4fr;
    grid-template-columns: 1.1fr 5fr;
    gap: 10px;
    background-color: rgb(217, 248, 241);
    min-height: 100vh;
    padding: 5px 9px;
  }

  .start-page {
    &__header {
      grid-area: header;
    }

    &__aside {
      grid-area: aside;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font: bold 18px/25px 'Raleway', sans-serif;
      white-space: nowrap;
      color: white;
      border-radius: 30px;
      background-color: rgba(35, 146, 85, 0.5);
      min-width: 200px;
      max-width: 400px;
      max-height: 300px;
      padding: 30px 5px 5px;
    }

    &__main {
      grid-area: main;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-right: 20%;
      padding-top: 5%;
    }
  }

  @media (max-width: 800px) {
    .start-page {
      grid-template-areas:
        'header header header'
        '. main .'
        '. aside .';
      grid-template-rows: 34px 1fr 350px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .start-page__main {
      padding-right: 0;
    }
  }

  @media (max-height: 500px) {
    @media (min-width: 800px) {
      .start-page {
        grid-template-rows: 34px 100px 1fr 100px;
        grid-template-columns: 1.1fr 5fr;
      }
    }
  }
</style>
