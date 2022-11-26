<script setup>
  import { ref } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
  import { authContext } from '@/stores/authContext';

  const storeAuthContext = authContext();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const props = defineProps({
    note: Object,
  });

  const isDelete = ref(false);

  const deleteNote = async () => {
    isDelete.value = true;

    const response = await fetch(
      'http://localhost:4000/lesson/theory-notes/' + props.note._id,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );
    const payload = await response.json();

    if (response.ok) {
      storeTheoryNotesCollection.deleteTheoryNote(payload);
    }

    isDelete.value = false;
  };
</script>

<template>
  <div
    class="lessons-main__note note"
    :style="props.note.textStyle"
  >
    {{ note.text }}
    <button
      class="note__delete-button"
      @click="deleteNote"
      :disabled="isDelete"
      :class="{ 'note__delete-button_disabled': isDelete }"
    >
      <span
        class="material-symbols-outlined ghty"
        style="font-size: 20px"
      >
        delete_forever
      </span>
    </button>
  </div>
</template>

<style>
  .lessons-main__note {
    overflow-wrap: break-word;
    white-space: pre-line;
    overflow-y: auto;
    background-color: rgba(231, 229, 229, 0.548);
    border-radius: 10px;
    margin: 5px;
    padding: 5px 25px 5px 5px;
    max-width: 600px;
    max-height: 400px;
  }

  .note__delete-button {
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    cursor: default;
    line-height: 0;
    border: 0;
  }

  .note__delete-button:hover {
    color: red;
  }

  .note__delete-button_disabled,
  .note__delete-button_disabled:hover {
    color: rgb(212, 208, 208);
  }
</style>
