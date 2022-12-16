<script setup>
  import { ref } from 'vue'
  import CreateNotes from '../theory/components/createNotes/CreateNotes.vue';
  import NotesEditor from './components/notesEditor/notesEditor.vue';

  const props = defineProps({
    note: Object,
  });

  const editFormSeen = ref(false);
</script>

<template>
  <div class="lessons-main__note note">
    <CreateNotes 
      :noteForEdit="props.note"
      v-if="editFormSeen"
      :editFormSeen="editFormSeen"
      @closeEditNoteForm="editFormSeen=false"
    />
    <NotesEditor
      v-show="!editFormSeen"
      :noteID="props.note._id"
      @openEditNoteForm="editFormSeen=true"
    />
    <div
      v-show="!editFormSeen"
      class="note__content"
      :style="props.note.textStyle"
    >
      {{ note.text }}
    </div>
  </div>
</template>

<style>
  .lesson-main__note {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .note__content{
    overflow-wrap: break-word;
    white-space: pre-line;
    overflow-y: auto;
    background-color: rgba(231, 229, 229, 0.548);
    border-radius: 10px;
    margin: 5px;
    margin-top: 0;
    padding: 5px 25px 5px 5px;
    max-width: 600px;
    max-height: 400px;
  }
</style>
