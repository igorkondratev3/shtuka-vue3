<script setup>
  import { ref } from 'vue';
  import EditorVue from './components/editor/editorVue.vue';
  import ContentVue from './components/content/contentVue.vue';

  const props = defineProps({
    noteForEdit: Object,
    editFormSeen: Boolean,
    notesSeen: Boolean
  });

  defineEmits(['closeEditNoteForm']);

  const styleForNotesContent = ref({
    color: '',
    fontSize: '16px',
    fontFamily: 'Times New Roman',
    fontWeight: '',
    fontStyle: '',
    textDecoration: '',
  });

  if (props.noteForEdit) {
    for (const key in props.noteForEdit.textStyle) {
      styleForNotesContent.value[key] = props.noteForEdit.textStyle[key];
    }
  };

  const changeStyleForNotesContent = (changedParameter) => {
    for (let key in changedParameter) {
      styleForNotesContent.value[key] = changedParameter[key]; 
    } 
  }; //вроде можно перерработать после того как удалил line-height или объединить с логикой выше

  const flagClearStyleForNotesContent = ref(1);

  const clearStyleForNotesContent = () => {
    styleForNotesContent.value.color = '';
    styleForNotesContent.value.fontSize = '16px';
    styleForNotesContent.value.fontFamily = 'Times New Roman';
    styleForNotesContent.value.fontWeight = '';
    styleForNotesContent.value.fontStyle = '';
    styleForNotesContent.value.textDecoration = '';
    flagClearStyleForNotesContent.value++; 
  };
</script>

<template>
  <div class="Lesson-theory__notes notes">
    <EditorVue
      @changeStyleForNotesContent="changeStyleForNotesContent"
      :flagClearStyleForNotesContent="flagClearStyleForNotesContent"
      :currentValuesForEditNote="props.noteForEdit?.textStyle"
    />
    <ContentVue
      :styleForNotesContent="styleForNotesContent"
      :textForEditNote="props.noteForEdit?.text"
      :editNoteID="props.noteForEdit?._id"
      :editFormSeen="editFormSeen"
      :notesSeen="notesSeen"
      @closeEditNoteForm="$emit('closeEditNoteForm')" 
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
