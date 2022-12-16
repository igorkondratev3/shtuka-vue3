<script setup>
  import { ref } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
  import { authContext } from '@/stores/authContext';
  import { deleteElementFromDB } from '@/views/generalFunctions/requestsToBackend';

  const props = defineProps({
    noteID: String
  })

  const storeAuthContext = authContext();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const isDelete = ref(false);

  const deleteNote = async () => {
    isDelete.value = true;

    const payloadResponse = await deleteElementFromDB(
      'theory-notes',
      props.noteID,
      storeAuthContext.user.token,
      storeAuthContext.user.refreshToken
    );

    if (!payloadResponse.error) storeTheoryNotesCollection.deleteTheoryNote(payloadResponse);
    
    isDelete.value = false;
  };
</script>

<template>
  <button
    class="note-editor__button delete-button_color"
    @click="deleteNote"
    :disabled="isDelete"
    :class="{ 'note-editor__button_disabled': isDelete }"
  >
    <span
      class="material-symbols-outlined ghty"
      style="font-size: 20px; line-height: 20px;"
    >
      delete_forever
    </span>
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

  .delete-button_color:hover {
    color: red;
  }

  .note-editor__button_disabled,
  .note-editor__button_disabled:hover {
    color: rgb(212, 208, 208);
  }
</style>