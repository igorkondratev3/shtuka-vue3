<script setup>
  const props = defineProps({
    additional: Object,
  });
  defineEmits(['openCreateAdditionalsForm']);
</script>

<template>
  <button
    class="additionals-link__button additionals-link__button_color"
    title="изменить"
    @click="$emit('openCreateAdditionalsForm', props.additional)"
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
  .additionals-link__button_color:hover {
    color: rgb(64, 156, 156);
  }
</style>
