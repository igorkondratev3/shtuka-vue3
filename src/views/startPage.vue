<script setup>
  import { RouterLink } from 'vue-router';
  import { lessonNum } from '@/stores/lessonNum';
  import { changeColor } from './generalFunctions/functions';
  import { ref, onMounted } from 'vue';
  const storeLessonNum = lessonNum();
  function changeLessonNumber() {
    storeLessonNum.circleNumber = 1;
    storeLessonNum.gradeNumber = 7;
    storeLessonNum.lessonNumber = 1;
  }
  const goToFirstLesson = ref(null);
  const goToLessonsList = ref(null);
  onMounted(() => {
    changeColor(goToFirstLesson.value);
    changeColor(goToLessonsList.value);
  });
</script>

<template>
  <div class="start-navigation">
    <router-link
      class="links"
      to="/lessonLayout"
    >
      <div
        class="start-navigation__buttons"
        @click="changeLessonNumber"
        ref="goToFirstLesson"
      >
        Перейти к первому уроку
      </div>
    </router-link>
    <router-link
      class="links"
      to="/lessonsList"
    >
      <div
        class="start-navigation__buttons"
        ref="goToLessonsList"
      >
        Перейти к списку уроков
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  .start-navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
  }
  .start-navigation {
    &__buttons {
      display: inline-block;
      padding: 10px;
      margin: 10px;
      border: 0.5px solid black;
      border-radius: 30px;
      color: blue;
      user-select: none;
      background: radial-gradient(transparent 30%, rgb(245, 245, 131));
    }
  }
  .links {
    cursor: default;
  }
</style>
