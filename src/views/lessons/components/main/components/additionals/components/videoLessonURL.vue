<script setup>
  import { computed } from 'vue';
  import { lessonsCollection } from '@/stores/lessonsCollection';
  import { lessonNum } from '@/stores/lessonNum';

  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();
  const videoLessonURL = computed(() => {
    return storeLessonsCollection[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson]?.videoLessonURL;
  });
</script>

<template>
  <a
    class="additionals__link additionals__video-lesson-UTL additionals-link"
    :href="videoLessonURL"
    target="_blank"
  >
    <div class="additionals-link__content">Видеоурок</div>
  </a>
</template>

<style></style>
