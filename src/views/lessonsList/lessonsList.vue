<script setup>
  import LessonsNavigation from './components/lessonsNavigation/lessonsNavigation.vue';
  import CloseLessonsList from './components/closeLessonsList.vue';
  import LessonsVue from './components/lessonsVue.vue';
  import { ref } from 'vue';
  import { lessonsCollection } from '../../stores/lessonsCollection';

  const storeLessonsCollection = lessonsCollection();
  const circleAndGrade = ref({
    circle: 1,
    grade: 7,
    addForNumberOfLesson: 0,
  });

  function changeCircle(circle) {
    circleAndGrade.value.circle = circle;
    if (circle == 1) {
      circleAndGrade.value.grade = 7;
    } else {
      circleAndGrade.value.grade = 9;
    }
    changeAddForNumberOfLesson();
  }

  function changeGrade(grade) {
    circleAndGrade.value.grade = grade;
    changeAddForNumberOfLesson();
  }

  function changeAddForNumberOfLesson() {
    switch (circleAndGrade.value.grade) {
      case 7:
        circleAndGrade.value.addForNumberOfLesson = 0;
        break;
      case 8:
        circleAndGrade.value.addForNumberOfLesson =
          storeLessonsCollection.numberOfGrade7Lessons;
        break;
      case 9:
        if (circleAndGrade.value.circle == 1) {
          circleAndGrade.value.addForNumberOfLesson =
            storeLessonsCollection.numberOfGrade7Lessons +
            storeLessonsCollection.numberOfGrade8Lessons;
        } else {
          circleAndGrade.value.addForNumberOfLesson = 0;
        }
        break;
      case 10:
        circleAndGrade.value.addForNumberOfLesson =
          storeLessonsCollection.numberOfCircle2Grade9Lessons;
        break;
      case 11:
        circleAndGrade.value.addForNumberOfLesson =
          storeLessonsCollection.numberOfCircle2Grade9Lessons +
          storeLessonsCollection.numberOfGrade10Lessons;
        break;
    }
  }
</script>

<template>
  <div class="lessons-list">
    <CloseLessonsList />
    <LessonsNavigation
      @changeCircle="changeCircle"
      @changeGrade="changeGrade"
    />
    <LessonsVue :circleAndGrade="circleAndGrade" />
  </div>
</template>

<style>
  .lessons-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(232, 250, 245);
    min-height: 100vh;
  }
</style>
