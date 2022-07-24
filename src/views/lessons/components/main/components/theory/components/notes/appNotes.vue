<script setup>
  import { ref } from 'vue';
  import EditorVue from './components/editor/editorVue.vue';
  import ContentVue from './components/content/contentVue.vue';
  let changedParameterForNotesContent = ref({
    color: '',
    fontSize: '',
    paddingTop: '',
    lineHeight: '',
    fontFamily: '',
    fontWeight: '',
    fontStyle: '',
    textDecoration: '',
  });
  function changeParameterValue(changedParameter) {
    for (let key in changedParameter) {
      changedParameterForNotesContent.value[key] = changedParameter[key];
    }
  }
</script>

<template>
  <div class="notes">
    <EditorVue @changeParameterValue="changeParameterValue" />
    <ContentVue :changedParameter="changedParameterForNotesContent" />
  </div>
</template>

<style scoped>
  .notes {
    margin-top: 10px;
    /*добавил*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
