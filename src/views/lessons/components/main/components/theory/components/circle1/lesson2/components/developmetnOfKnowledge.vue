<script setup>
  import ArrowRight from './arrow/arrowRight.vue';
</script>

<template>
  <p class="theory__p">Знание развивается по винтовой линии:</p>
  <div class="theory__development-of-knowledge development-of-knowledge">
    <p class="development-of-knowledge__p">Наблюдение</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Гипотеза</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Эксперимент</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Гипотеза</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Эксперимент</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Гипотеза...</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Закон</p>
    <ArrowRight />
    <p class="development-of-knowledge__p">Теория</p>
  </div>
</template>

<style scoped lang="scss">
  .theory {
    &__p {
      text-align: left;
      padding: 0px 5px 0px 16px;
      color: black;
      font: oblique 16px Times New Roman;
      line-height: 17px;
    }
    &__development-of-knowledge {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-left: 16px;
    }
  }
  .development-of-knowledge {
    &__p {
      text-align: left;
      color: black;
      font: oblique 16px Times New Roman;
      line-height: 17px;
    }
  }
</style>
