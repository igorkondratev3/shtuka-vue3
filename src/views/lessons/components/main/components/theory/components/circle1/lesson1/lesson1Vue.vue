<script setup>
  import PhysicsAndNature from './components/physicsAndNature.vue';
  import MatterAndBody from './components/matterAndBody.vue';
  import PhenomenonOnly from './components/phenomenonOnly.vue';
  import HeadThemesOfPhysic from './components/headThemesOfPhysic.vue';
  import OtherThemesOfPhysic from './components/otherThemesOfPhysic.vue';
</script>

<template>
  <div class="theory">
    <PhysicsAndNature />
    <MatterAndBody />
    <PhenomenonOnly />
    <HeadThemesOfPhysic />
    <OtherThemesOfPhysic />
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
