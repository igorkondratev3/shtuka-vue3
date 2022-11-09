<script setup>
  import { ref } from 'vue';
  import EditorVue from './components/editor/editorVue.vue';
  import ContentVue from './components/content/contentVue.vue';

  const styleForNotesContent = ref({
    color: '',
    fontSize: '16px',
    fontFamily: 'Times New Roman',
    fontWeight: '',
    fontStyle: '',
    textDecoration: '',
  });

  function changeStyleForNotesContent(changedParameter) {
    for (let key in changedParameter) {
      styleForNotesContent.value[key] = changedParameter[key];
    }
  }

  const flagClearStyleForNotesContent = ref({
    param: 1,
  }); //переделать

  function clearStyleForNotesContent() {
    styleForNotesContent.value.color = '';
    styleForNotesContent.value.fontSize = '16px';
    styleForNotesContent.value.fontFamily = 'Times New Roman';
    styleForNotesContent.value.fontWeight = '';
    styleForNotesContent.value.fontStyle = '';
    styleForNotesContent.value.textDecoration = '';
    flagClearStyleForNotesContent.value.param++;
  }
</script>

<template>
  <div class="Lesson-theory__notes notes">
    <EditorVue
      @changeStyleForNotesContent="changeStyleForNotesContent"
      :flagClearStyleForNotesContent="flagClearStyleForNotesContent"
    />
    <ContentVue
      :styleForNotesContent="styleForNotesContent"
      @clearStyleForNotesContent="clearStyleForNotesContent"
    />
  </div>
</template>

<style>
  .notes {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 300px;
    margin-top: 10px;
    margin: 10px auto;
  }
</style>
