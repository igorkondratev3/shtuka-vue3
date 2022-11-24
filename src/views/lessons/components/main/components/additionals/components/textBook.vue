<script setup>
  import { lessonsCollection } from '@/stores/lessonsCollection';
  import { lessonNum } from '@/stores/lessonNum';
  import { computed } from 'vue';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();
  const textBook = computed(() => {
    return storeLessonsCollection[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson]?.textBook;
  });
  const bookUrl = computed(() => {
    return storeLessonsCollection[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson]?.bookUrl;
  });
</script>

<template>
  <a
    class="additionals__link additionals__text-book additionals-link"
    :href="bookUrl"
    target="_blank"
  >
    <div
      class="additionals-link__content"
      :title="textBook"
    >
      Учебник
    </div>
  </a>
</template>

<style lang="scss">
  .additionals__link {
    margin-top: 10px;
    text-decoration: none;
  }

  .additionals-link {
    &__content {
      font: oblique 18px Times New Roman;
      text-align: center;
      overflow-x: hidden;
      text-overflow: ellipsis;
      color: black;
      cursor: default;
      border: 0.5px dashed black;
      border-radius: 30px;
      padding: 5px;
      width: 170px;
      height: 33px;
      transition-property: border, background;
      transition-duration: 6s, 3s;
    }
    &__content:hover {
      border: 0.5px solid black;
      background: radial-gradient(transparent 50%, #8695a5);
    }
  }
</style>
