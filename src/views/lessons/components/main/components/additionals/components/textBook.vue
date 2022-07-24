<script setup>
  import { lessonInformation } from '@/stores/lessonInformation';
  import { lessonNum } from '@/stores/lessonNum';
  import { computed } from 'vue';
  const storeLessonInformation = lessonInformation();
  const storeLessonNum = lessonNum();
  const textBook = computed(() => {
    return storeLessonInformation.lessons[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson].textBook;
  });
</script>

<template>
  <a
    class="a a_margin"
    href=" "
    target="_blank"
  >
    <div class="additionals__content">
      {{ textBook }}
    </div>
    <!--попробовать через nth-child-->
  </a>
</template>

<style scoped lang="scss">
  .a {
    text-decoration: none;
    cursor: default;
  }
  .a {
    &_margin {
      margin-top: 10px;
    }
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

  @media (max-width: 1172px) {
    .a_margin {
      margin-left: 10px;
      margin-top: 0px;
    }
  }

  @media (max-width: 532px) {
    .a_margin {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
</style>
