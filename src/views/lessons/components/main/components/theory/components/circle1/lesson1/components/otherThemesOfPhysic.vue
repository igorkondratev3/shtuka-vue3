<script setup>
  const OtherThemesOfPhysic = [
    'атомная физика',
    'ядерная физика',
    'физика элементарных частиц',
  ];
</script>

<template>
  <p class="theory__p theory__p_align-p5">Еще три раздела физики:</p>
  <ul class="other-themes-of-physic ul">
    <li
      v-for="theme in OtherThemesOfPhysic"
      :key="theme.id"
    >
      {{ theme }}
    </li>
  </ul>
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
      &_align-p5 {
        margin-top: 17px;
      }
    }
  }
  .ul {
    list-style: Circle inside;
    text-align: left;
    padding-left: 16px;
    color: black;
    font: oblique 16px Times New Roman;
    line-height: 16.5px;
  }
</style>
