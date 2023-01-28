<script setup>
  defineEmits(['openEditNoteForm']);
</script>

<template>
  <button
    class="note-editor__button edit-button_color"
    title="изменить"
    @click="$emit('openEditNoteForm')"
  >
    <img
      class="icon_middle-size edit-icon_color"
      src="/src/assets/edit.svg"
    />
  </button>
</template>

<style></style>
