<script setup>
  import { inject } from 'vue'

  const props = defineProps({
    additional: Object,
  });
  const openCreateAdditionalsForm = inject('openCreateAdditionalsForm');
</script>

<template>
  <button
    class="additionals-link__button edit-button_color"
    title="изменить"
    @click="openCreateAdditionalsForm('edit', props.additional)"
  >
    <span
      class="material-symbols-outlined"
      style="font-size: 15px; line-height: 15px"
    >
      edit
    </span>
  </button>
</template>

<style>
  .edit-button_color:hover {
    color: rgb(64, 156, 156);
  }
</style>
