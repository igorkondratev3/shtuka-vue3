<script setup>
  import VideoLessonURL from './components/videoLessonURL.vue';
  import TextBook from './components/textBook.vue';
</script>

<template>
  <div class="additionals">
    <div class="additionals__title">
      <b>Дополнительные материалы:</b>
    </div>
    <VideoLessonURL />
    <TextBook />
  </div>
</template>

<style scoped lang="scss">
  .additionals {
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .additionals {
    &__title {
      text-align: center;
      color: black;
      margin-bottom: 10px;
      font: oblique 16px Times New Roman;
      max-width: 150px;
    }
  }

  @media (max-width: 1172px) {
    .additionals {
      flex-direction: row;
      margin-top: 15px;
      order: 4;
    }
    .additionals__title {
      margin-bottom: 0px;
    }
    a:last-of-type {
      margin-left: 10px;
      margin-top: 0px;
    }
  }

  @media (max-width: 532px) {
    .additionals {
      flex-direction: column;
    }
    .additionals__title {
      margin-bottom: 10px;
    }
    a:last-of-type {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
</style>
