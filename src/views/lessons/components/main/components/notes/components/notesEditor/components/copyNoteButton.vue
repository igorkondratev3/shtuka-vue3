<script setup>
  import { ref } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
  import { authContext } from '@/stores/authContext';
  import { getNewTokens } from '@/views/generalFunctions/refreshToken';

  const props = defineProps({
    noteID: String
  })

  const storeAuthContext = authContext();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const isCopy = ref(false);

  const copyNote = async () => {
    isCopy.value = true;

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/lesson/theory-notes/copy`,
    {
      method: 'POST',
      body: JSON.stringify({ _id: props.noteID }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${storeAuthContext.user?.token}`,
      },
    }
  );

    const payload = await response.json();

    if (payload.error === 'Необходимо предоставить refreshToken') {
      const tokens = await getNewTokens(storeAuthContext.user.refreshToken);
      
      if (tokens.error) {
        isCopy.value = false;
        return;
      }

      storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
      copyNote();
      return;
    }

    if (!response.ok) {
      isCopy.value = false;
    }

    if (response.ok) {
      storeTheoryNotesCollection.setTheoryNote(payload);
      isCopy.value = false;
    }
  };
</script>

<template>
  <button
    class="note-editor__button copy-button_color"
    @click="copyNote"
    :disabled="isCopy"
    :class="{ 'note-editor__button_disabled': isCopy }"
  >
    <span 
      class="material-symbols-outlined"
      style="font-size: 18px; line-height: 18px;"
    >
      file_copy
    </span>
  </button>
</template>

<style>
  .copy-button_color:hover {
    color: rgb(160, 161, 75);
  }
</style>