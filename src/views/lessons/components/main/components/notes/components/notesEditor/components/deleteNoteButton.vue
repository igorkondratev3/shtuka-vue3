<script setup>
  import { ref, inject } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection.js';
  import { authContext } from '@/stores/authContext.js';
  import { deleteElementFromDB } from '@/views/generalFunctions/requestsToBackend.js';
  import { showErrorSymbol } from '@/views/lessons/components/main/components/notes/symbols.js';

  const props = defineProps({
    noteID: String,
  });
  const showError = inject(showErrorSymbol);

  const storeAuthContext = authContext();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const isDelete = ref(false);

  const deleteNote = async () => {
    isDelete.value = true;

    const deletedNote = await deleteElementFromDB(
      'theory-notes',
      props.noteID,
      storeAuthContext.user.token,
      storeAuthContext.user.refreshToken
    );

    if (deletedNote.error) {
      showError(deletedNote.error);
      isDelete.value = false;
      return;
    }

    storeTheoryNotesCollection.deleteTheoryNote(deletedNote);
    isDelete.value = false;
  };
</script>

<template>
  <button
    class="note-editor__button delete-button_color"
    title="удалить"
    @click="deleteNote"
    :disabled="isDelete"
  >
    <img 
      :class="{'icon-disabled': isDelete, 'delete-icon_color': !isDelete }"
      class="icon_middle-size"
      src="/src/assets/close.svg"
    />
  </button>
</template>

<style>
  .note-editor__button {
    color: black;
    cursor: default;
    background-color: transparent;
    line-height: 0;
    border: 0;
    margin-right: 3px;
  }
</style>
