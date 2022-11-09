<script setup>
  import ScientificsMethods from './components/scientificsMethods.vue';
  import LawAndTheory from './components/lawAndTheory.vue';
  import DevelopmetnOfKnowledge from './components/developmetnOfKnowledge.vue';
  import ExampleStudyPhenomena from './components/exampleStudyPhenomena.vue';
</script>

<template>
  <div class="lesson-theory__content theory-content">
    <ScientificsMethods />
    <LawAndTheory />
    <DevelopmetnOfKnowledge />
    <ExampleStudyPhenomena />
  </div>
</template>

<style>
  .lesson-theory__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(231, 229, 229, 0.548);
    padding: 0px 5px;
    border-radius: 30px;
  }
</style>
