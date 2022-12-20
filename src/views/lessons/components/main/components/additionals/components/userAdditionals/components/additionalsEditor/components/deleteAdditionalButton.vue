<script setup>
  import crossSVG from '@/views/generalComponents/svg/crossSVG.vue';
  import { ref, inject } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { deleteElementFromDB } from '@/views/generalFunctions/requestsToBackend';
  import { showErrorSymbol } from '@/views/lessons/components/main/components/additionals/symbols.js';

  const props = defineProps({
    additionalID: String,
  });
  const showError = inject(showErrorSymbol);

  const storeAuthContext = authContext();
  const storeAdditionalsCollection = additionalsCollection();

  const isOverDeleteButton = ref(false);
  const isDelete = ref(false);

  const deleteAdditional = async () => {
    if (isDelete.value) {
      return;
    }
    // вместо disabled на элементе, так как в таком случае не отрабатывается обработчик и соответственно stop, а тогда осуществляется переход по ссылке

    isDelete.value = true;

    const deletedAdditional = await deleteElementFromDB(
      'additionals',
      props.additionalID,
      storeAuthContext.user.token,
      storeAuthContext.user.refreshToken
    );

    if (deletedAdditional.error) {
      showError(deletedAdditional.error);
      isDelete.value = false;
      return;
    }

    storeAdditionalsCollection.deleteAdditional(deletedAdditional);
    isDelete.value = false;
  };
</script>

<template>
  <button
    class="additionals-link__button"
    title="удалить"
    @click="deleteAdditional"
    @pointerover="isOverDeleteButton = true"
    @pointerout="isOverDeleteButton = false"
  >
    <crossSVG
      :isOverDeleteButton="isOverDeleteButton"
      :isDelete="isDelete"
    />
  </button>
</template>

<style>
  .additionals-link__button {
    color: black;
    background-color: transparent;
    cursor: default;
    line-height: 0;
    border: 0;
    margin-right: 3px;
  }
</style>
