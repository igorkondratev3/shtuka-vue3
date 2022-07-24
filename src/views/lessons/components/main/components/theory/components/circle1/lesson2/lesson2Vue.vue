<script setup>
  import ScientificsMethods from './components/scientificsMethods.vue';
  import LawAndTheory from './components/lawAndTheory.vue';
  import FalseData from './components/falseData.vue';
  import DevelopmetnOfKnowledge from './components/developmetnOfKnowledge.vue';
  import ExampleStudyPhenomena from './components/exampleStudyPhenomena.vue';
</script>

<template>
  <div class="theory">
    <ScientificsMethods />
    <LawAndTheory />
    <FalseData />
    <DevelopmetnOfKnowledge />
    <ExampleStudyPhenomena />
    <slot name="buttonShowNotes"></slot
    ><!--сделано чтобы пропадпло вместе с компонентом
    который еще незадан. Когда будут все уроки просто в апптеори обычным компонентом,
    а из всех уроков убрать-->
  </div>
</template>

<style scoped>
  .theory {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
