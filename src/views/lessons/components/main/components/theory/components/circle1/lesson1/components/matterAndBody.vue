<script setup>
  import { ref, onMounted } from 'vue';
  import {
    calculateCoordinatesForLine,
    drawLinesBetweenWords,
    setWidthAreaForLinesBetweenWords,
  } from './functions.js';
  const firstLetterMatter = ref(null);
  const lastLetterMatter = ref(null);
  const lastLetterSubstance = ref(null);
  const firstLetterField = ref(null);
  const areaForLinesBetweenWords = ref(null);
  onMounted(() => {
    setWidthAreaForLinesBetweenWords(
      areaForLinesBetweenWords,
      lastLetterSubstance,
      firstLetterField
    );
    let areaForLines = areaForLinesBetweenWords.value.getContext('2d');
    drawLinesBetweenWords(
      areaForLines,
      calculateCoordinatesForLine(
        areaForLinesBetweenWords,
        firstLetterMatter,
        lastLetterSubstance
      )
    );
    drawLinesBetweenWords(
      areaForLines,
      calculateCoordinatesForLine(
        areaForLinesBetweenWords,
        lastLetterMatter,
        firstLetterField
      )
    );
  });
</script>

<template>
  <p class="theory__p theory__matter theory__p_align-p2">
    <span
      class="p2__first-letter-for-line-to-substance"
      ref="firstLetterMatter"
    >
      М</span
    >атерия<span
      class="p2__last-letter-for-line-to-field"
      ref="lastLetterMatter"
    >
    </span>
  </p>
  <div class="theory__canvasBox">
    <canvas
      class="theory__lines-for-matter"
      ref="areaForLinesBetweenWords"
      height="34"
    >
    </canvas>
  </div>
  <div class="theory__substance-and-field substance-and-field">
    <div class="substance-and-field__substance">
      вещество<span
        class="substance__last-letter-for-line"
        ref="lastLetterSubstance"
      ></span>
      <br />(воспринимается с помощью<br />органов чувств)
    </div>
    <div class="substance-and-field__field">
      <span
        class="field__first-letter-for-line"
        ref="firstLetterField"
        >п</span
      >оле <br />(не воспринимается с помощью<br />органов чувств)
    </div>
  </div>

  <p class="theory__p theory__p_align-p3">
    Тело – область пространства, занятая веществом(стол, стул, ручка,
    тетрадь,...).
  </p>
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

    &__p {
      &_align-p2 {
        margin-top: 17px;
      }

      &_align-p3 {
        margin-top: 17px;
        margin-bottom: 17px;
      }
    }

    &__matter {
      align-self: center;
      padding: 0;
    }

    &__canvasBox {
      align-self: center;
      line-height: 0; //помогает убрать 4 лишних пикселя в родителе(место для спусков: буква j)
    }
  }

  .substance-and-field {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font: oblique 16px Times New Roman;
    text-align: center;
  }
  .substance-and-field {
    &__substance {
      margin-right: 30px;
      line-height: 17px;
    }

    &__field {
      line-height: 17px;
    }
  }
</style>
