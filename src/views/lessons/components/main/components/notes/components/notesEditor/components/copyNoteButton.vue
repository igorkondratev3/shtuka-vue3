<script setup>
  import { ref, inject } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection.js';
  import { authContext } from '@/stores/authContext.js';
  import { getNewTokens, updateTokens } from '@/views/generalFunctions/refreshToken.js';
  import { showErrorSymbol } from '@/views/lessons/components/main/components/notes/symbols.js';

  const props = defineProps({
    noteID: String,
  });
  const showError = inject(showErrorSymbol);

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
        showError(tokens.error);
        isCopy.value = false;
        return;
      }
      updateTokens(tokens);
      copyNote();
      return;
    }

    if (!response.ok) {
      showError(payload.error);
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
    title="копировать"
    @click="copyNote"
    :disabled="isCopy"
  >
    <img
      :class="{'icon-disabled': isCopy, 'copy-icon_color': !isCopy }"
      class="icon_middle-size"
      src="/src/assets/copy.svg"
    />
  </button>
</template>

<style>
</style>
