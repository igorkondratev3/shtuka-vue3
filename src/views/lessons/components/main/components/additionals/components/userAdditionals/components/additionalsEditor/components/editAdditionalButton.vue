<script setup>
  import { inject } from 'vue';

  const props = defineProps({
    additional: Object,
  });
  const openCreateAdditionalsForm = inject('openCreateAdditionalsForm');
</script>

<template>
  <button
    class="additionals-link__button"
    title="изменить"
    @click="openCreateAdditionalsForm('edit', props.additional)"
  >
    <img
      class="icon_small-size edit-icon_color"
      src="/src/assets/edit.svg"
    />
  </button>
</template>

<style>

</style>
