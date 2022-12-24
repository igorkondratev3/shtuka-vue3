<script setup>
  import { ref, watch } from 'vue';

  defineEmits(['changeStyleForNotesContent']);
  const props = defineProps({
    flagClearStyleForNotesContent: Number,
    startValueForEditNote: String,
  });

  const color = ref(props.startValueForEditNote || '#000000');

  watch(
    () => props.flagClearStyleForNotesContent,
    () => {
      color.value = '#000000';
    }
  );
</script>

<template>
  <input
    type="color"
    v-model="color"
    ref="colorElement"
    @input="$emit('changeStyleForNotesContent', { color })"
    class="editor__color"
  />
</template>

<style>
  .editor__color {
    width: 50px;
    height: 18px;
  }
</style>
