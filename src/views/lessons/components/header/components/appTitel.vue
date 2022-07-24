<script setup>
  import { computed } from 'vue';
  import { lessonInformation } from '@/stores/lessonInformation';
  import { lessonNum } from '@/stores/lessonNum';
  const storeLessonInformation = lessonInformation();
  const storeLessonNum = lessonNum();
  const heading = computed(() => {
    return storeLessonInformation.lessons[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson].headings;
  });
  const theme__value_media = computed(() => {
    return storeLessonNum.lesson;
  });
</script>

<template>
  <div class="theme">
    <h1
      class="theme__value"
      :class="theme__value_media"
      v-for="head in heading"
      :key="head.id"
    >
      {{ head }}
    </h1>
  </div>
</template>

<style scoped lang="scss">
  .theme {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 10px;
    margin-right: 10px;
    margin-top: 5px;
    border: 0.5px solid black;
    border-radius: 30px;
    background: radial-gradient(transparent 60%, #caf2fe);
    max-height: 34px;
  }

  .theme {
    &__value {
      padding: 0px 0px 2px 5px;
      text-align: left;
      font: oblique 18px Times New Roman;
      font-weight: bold;
    }
  }

  @media (max-width: 700px) {
    h1.lesson1:nth-child(4) {
      display: none;
    }
    h1.lesson1:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 455px) {
    h1.lesson1:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 465px) {
    h1.lesson2:nth-child(2) {
      display: none;
    }
  }
</style>
