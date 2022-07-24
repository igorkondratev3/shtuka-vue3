<script setup>
  import { ref } from 'vue';
  import TitelVue from './components/titelVue.vue';
  import NavigationVue from './components/navigationVue.vue';
  import LessonsVue from './components/lessonsVue.vue';
  const circleAndGrade = ref({
    circle: 1,
    grade: 7,
  });
  function changeCircle(circle) {
    circleAndGrade.value.circle = circle;
    if (circle == 1) {
      circleAndGrade.value.grade = 7;
    } else {
      circleAndGrade.value.grade = 9;
    }
  }
  function changeGrade(grade) {
    circleAndGrade.value.grade = grade;
  }
</script>

<template>
  <div class="lessons-list">
    <TitelVue />
    <NavigationVue
      @changeCircle="changeCircle"
      @changeGrade="changeGrade"
    />
    <LessonsVue :changedCircleAndGrade="circleAndGrade" />
  </div>
</template>

<style scoped lang="scss">
  .lessons-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
