<script setup>
  const headThemesOfPhysic = [
    'световые (оптика)',
    'звуковые (акустика)',
    'тепловые (термодинамика)',
    'электромагнитные (электродинамика)',
    'механические (механика)',
  ];
</script>

<template>
  <p class="theory__p theory__p_align-p4">
    Физические явления и изучающие их разделы физики:
  </p>
  <ul class="head-themes-of-physic ul">
    <li
      v-for="theme in headThemesOfPhysic"
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
      &_align-p4 {
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
