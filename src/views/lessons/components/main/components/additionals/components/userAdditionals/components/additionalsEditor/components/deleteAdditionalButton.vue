<script setup>
  import crossSVG from '@/views/generalComponents/svg/crossSVG.vue';
  import { ref } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { deleteElementFromDB } from '@/views/generalFunctions/requestsToBackend';

  const props = defineProps({
    additional: Object,
  });
  const emit = defineEmits(['showError']);

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

    const payloadResponse = await deleteElementFromDB(
      'additionals',
      props.additional._id,
      storeAuthContext.user.token,
      storeAuthContext.user.refreshToken
    );

    if (payloadResponse.error) {
      emit('showError', payloadResponse.error);
      isDelete.value = false;
      return;
    }

    storeAdditionalsCollection.deleteAdditional(payloadResponse);
    isDelete.value = false;
  };
</script>

<template>
  <button
    class="additionals-link__button"
    title="удалить"
    @click.stop.prevent="deleteAdditional"
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
