<script setup>
  import { ref } from 'vue';
  import { lessonNum } from '@/stores/lessonNum';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { getNewTokens, updateTokens } from '@/views/generalFunctions/refreshToken';

  const storeLessonNum = lessonNum();
  const storeAdditionalsCollection = additionalsCollection();
  const storeAuthContext = authContext();

  const isCreate = ref(false);

  const props = defineProps({
    correctAdditionalValues: Object,
    resourceAddress: Object,
  });
  const emits = defineEmits(['showError', 'closeCreateAdditionalForm']);

  const addAdditional = async () => {
    if (!props.resourceAddress.reportValidity()) return;

    isCreate.value = true;

    const additional = {
      circle: storeLessonNum.circleNumber,
      grade: storeLessonNum.gradeNumber,
      lesson: storeLessonNum.lessonNumber,
      address: props.correctAdditionalValues.address,
      name: props.correctAdditionalValues.name,
      description: props.correctAdditionalValues.description,
    };

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URI}/lesson/additionals/`,
      {
        method: 'POST',
        body: JSON.stringify(additional),
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
        isCreate.value = false;
        return;
      }
      updateTokens(tokens);
      addAdditional();
      return;
    }

    if (!response.ok) {
      emits('showError', payload.error);
      isCreate.value = false;
    }

    if (response.ok) {
      storeAdditionalsCollection.setAdditional(payload);
      emits('closeCreateAdditionalForm');
      isCreate.value = false;
    }
  };
</script>

<template>
  <button
    class="create-additionals__button"
    @click="addAdditional"
    :disabled="isCreate"
    :class="{ disabled: isCreate }"
  >
    Создать дополнение
  </button>
</template>

<style></style>
