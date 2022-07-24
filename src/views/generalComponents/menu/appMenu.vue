<script setup>
  import { ref } from 'vue';
  import MenuButton from './components/menuButton/menuButton.vue';
  import MenuContent from './components/menuContent/menuContent.vue';
  const menuContentSeen = ref(false);
</script>

<template>
  <MenuButton
    @changeMenuContentSeen="menuContentSeen = !menuContentSeen"
    :menuContentSeen="menuContentSeen"
  ></MenuButton>
  <MenuContent
    v-show="menuContentSeen"
    @closeMenu="menuContentSeen = false"
  >
  </MenuContent>
</template>

<style scoped></style>
