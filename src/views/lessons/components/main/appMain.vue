<script setup>
  import AppTheory from './components/theory/appTheory.vue';
  import AppExample from './components/example/appExample.vue';
  import AppAdditionals from './components/additionals/appAdditionals.vue';
</script>

<template>
  <main class="main">
    <AppTheory />
    <AppExample />
    <AppAdditionals />
  </main>
</template>

<style scoped>
  .main {
    margin: 0px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 1014px) {
    .main {
      justify-content: space-around;
      flex-direction: column;
    }
  }
</style>
