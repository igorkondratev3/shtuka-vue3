<script setup>
  import { useRouter } from 'vue-router';
  const emits = defineEmits(['closeMenu']);
  const sections = [
    '',
    'Главная',
    'Список уроков',
    'Библиотека',
    'Формулы',
    'Справочники',
    'Контакты',
  ];
  const router = useRouter();
  function chooseSection(section) {
    switch (section) {
      case 'Главная':
        router.push({ path: '/' });
        break;
      case 'Список уроков':
        router.push({ path: '/lessonsList' });
        break;
    }
  }
</script>

<template>
  <transition name="changeSeenMenu">
    <div
      class="menu"
      @pointerleave="emits('closeMenu')"
    >
      <div
        v-for="section in sections"
        :key="section.id"
      >
        <div
          class="menu__sections"
          @click="chooseSection(section)"
        >
          {{ section }}
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
  .changeSeenMenu-enter-from,
  .changeSeenMenu-leave-to {
    opacity: 0;
  }
  .changeSeenMenu-enter-active,
  .changeSeenMenu-leave-active {
    transition: opacity 1s;
  }
  .changeSeenMenu-enter-to,
  .changeSeenMenu-leave-from {
    opacity: 100;
  }
  .menu {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 0.5px solid black;
    border-radius: 30px 30px 32px 32px;
    z-index: 7;
    background-color: #f0f0f4;
  }
  .menu {
    &__sections {
      width: 130px;
      height: 30px;
      border: 0.5px solid black;
      text-align: center;
      padding-top: 12px;
      font: 16px Times New Roman;
      transition: background-color 1s linear;
      cursor: default;
      color: black;
      background-color: white;
      box-sizing: content-box;
    }
    &__sections:hover {
      background-color: #8d8d8d;
    }

    div:first-child .menu__sections {
      border-radius: 30px 30px 0px 0px;
      background-color: transparent;
    }

    div:last-child .menu__sections {
      border-radius: 0px 0px 30px 30px;
    }
  }
</style>
