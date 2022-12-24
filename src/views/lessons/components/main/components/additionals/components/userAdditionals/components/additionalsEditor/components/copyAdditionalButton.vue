<script setup>
  import { ref, inject } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { getNewTokens } from '@/views/generalFunctions/refreshToken';
  import { showErrorSymbol } from '@/views/lessons/components/main/components/additionals/symbols.js';

  const props = defineProps({
    additionalID: String,
  });
  const showError = inject(showErrorSymbol);

  const storeAuthContext = authContext();
  const storeAdditionalsCollection = additionalsCollection();
  const isCopy = ref(false);

  const copyAdditional = async () => {
    isCopy.value = true;

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URI}/lesson/additionals/copy`,
      {
        method: 'POST',
        body: JSON.stringify({ _id: props.additionalID }),
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

      storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
      copyAdditional();
      return;
    }

    if (!response.ok) {
      showError(payload.error);
      isCopy.value = false;
    }

    if (response.ok) {
      storeAdditionalsCollection.setAdditional(payload);
      isCopy.value = false;
    }
  };
</script>

<template>
  <button
    class="note-editor__button copy-button_color"
    title="копировать"
    @click="copyAdditional"
    :disabled="isCopy"
    :class="{ 'note-editor__button_disabled': isCopy }"
  >
    <span
      class="material-symbols-outlined"
      style="font-size: 14px; line-height: 14px"
    >
      file_copy
    </span>
  </button>
</template>

<style></style>
