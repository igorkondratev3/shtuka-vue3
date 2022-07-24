<script setup>
  import { lessonInformation } from '@/stores/lessonInformation';
  import { lessonNum } from '@/stores/lessonNum';
  import { computed } from 'vue';
  const storeLessonInformation = lessonInformation();
  const storeLessonNum = lessonNum();
  const videoLessonURL = computed(() => {
    return storeLessonInformation.lessons[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson].videoLessonURL;
  });
</script>

<template>
  <a
    :href="videoLessonURL"
    target="_blank"
  >
    <div class="additionals__content">Видеоурок</div>
  </a>
</template>

<style scoped lang="scss">
  a {
    text-decoration: none;
    cursor: default;
  }

  .additionals {
    &__content {
      text-align: center;
      color: black;
      font: oblique 16px Times New Roman;
      border: 0.5px dashed black;
      border-radius: 30px;
      padding: 5px;
      cursor: default;
      width: 155px;
      transition-property: border, background;
      transition-duration: 6s, 3s;
    }

    &__content:hover {
      border: 0.5px solid black;
      background: radial-gradient(transparent 50%, #8695a5);
    }
  }
</style>
