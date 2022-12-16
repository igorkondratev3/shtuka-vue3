<script setup>
  defineEmits(['openEditNoteForm']);
</script>

<template>
  <button
    class="note-editor__button edit-button_color"
    title="изменить"
    @click="$emit('openEditNoteForm')"
  >
    <span
      class="material-symbols-outlined"
      style="font-size: 18px; line-height: 18px"
    >
      edit
    </span>
  </button>
</template>

<style>
</style>
