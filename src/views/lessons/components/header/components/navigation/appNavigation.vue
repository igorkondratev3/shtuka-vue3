<script setup>
  import { ref } from 'vue'
  import LessonsListButton from './components/lessonsListButton.vue';
  import LessonsButton from './components/lessonsButton.vue';

  const seenNavigation = ref(true);
</script>

<template>
  <div class="header__navigation-wrapper navigation-wrapper">
    <nav 
      class="header__navigation navigation"
      v-show="seenNavigation"
    >
      <LessonsButton where="previous" />
      <LessonsListButton />
      <LessonsButton where="next" />
    </nav>
    <div
      class="navigation-wrapper__seen-navigation"
      :title="seenNavigation ? 'скрыть' : 'раскрыть область навигации'"
      @click = "seenNavigation = !seenNavigation"
    >
      ...
    </div>
  </div>
</template>

<style>
  .header__navigation-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    top: 5px;
  }

  .navigation-wrapper__seen-navigation {
    font-size: 20px;
    line-height: 0;
    cursor: default;
    user-select: none;
  }

  .navigation-wrapper__seen-navigation:hover {
    font-size: 30px;
    color: #0f7b9c
  }

  .header__navigation {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>
