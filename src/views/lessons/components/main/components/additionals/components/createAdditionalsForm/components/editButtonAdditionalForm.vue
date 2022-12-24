<script setup>
  import { ref } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { getNewTokens } from '@/views/generalFunctions/refreshToken';

  const storeAdditionalsCollection = additionalsCollection();
  const storeAuthContext = authContext();

  const isEdit = ref(false);

  const props = defineProps({
    additionalID: String,
    correctAdditionalValues: Object,
    resourceAddress: Object,
  });
  const emits = defineEmits(['showError', 'closeCreateAdditionalForm']);

  const editAdditional = async () => {
    if (!props.resourceAddress.reportValidity()) return;

    isEdit.value = true;

    const editAdditional = {
      _id: props.additionalID,
      address: props.correctAdditionalValues.address,
      name: props.correctAdditionalValues.name,
      description: props.correctAdditionalValues.description,
    };

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URI}/lesson/additionals/`,
      {
        method: 'PATCH',
        body: JSON.stringify(editAdditional),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );

    const payload = await response.json();

    if (payload.error === 'Необходимо предоставить refreshToken') {
      const tokens = await getNewTokens(storeAuthContext.user?.refreshToken);
      if (tokens.error) {
        emits('showError', tokens.error);
        isEdit.value = false;
        return;
      }

      storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
      editAdditional();
      return;
    }

    if (!response.ok) {
      emits('showError', payload.error);
      isEdit.value = false;
    }

    if (response.ok) {
      storeAdditionalsCollection.editAdditional(payload);
      emits('closeCreateAdditionalForm');
      isEdit.value = false;
    }
  };
</script>

<template>
  <button
    class="create-additionals__button"
    @click="editAdditional"
    :disabled="isEdit"
    :class="{ disabled: isEdit }"
  >
    Отредактировать дополнение
  </button>
</template>

<style></style>
