<script setup>
  import ArrowRight from './arrow/arrowRight.vue';
</script>

<template>
  <div
    class="theory-content__development-of-knowledge development-of-knowledge"
  >
    <h3 class="development-of-knowledge__title">
      <b>Знание развивается по винтовой линии:</b>
    </h3>
    <div class="development-of-knowledge__content">
      <p>Наблюдение</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Гипотеза</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Эксперимент</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Гипотеза</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Эксперимент</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Гипотеза...</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Закон</p>
      <ArrowRight class="development-of-knowledge__arrow" />
      <p>Теория</p>
    </div>
  </div>
</template>

<style lang="scss">
  .development-of-knowledge {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font: oblique 18px 'Times New Roman';
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .development-of-knowledge {
    &__title {
      text-align: left;
      color: black;
      align-self: center;
    }
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-left: 16px;
      text-align: left;
      color: black;
    }
    &__arrow {
      align-self: flex-end;
      margin-bottom: 3px;
      margin-left: 3px;
      margin-right: 3px;
    }
  }
</style>
