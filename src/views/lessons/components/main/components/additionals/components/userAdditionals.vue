<script setup>
  import crossSVG from '@/views/generalComponents/svg/crossSVG.vue';
  import { ref } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';

  const storeAuthContext = authContext();
  const storeAdditionalsCollection = additionalsCollection();
  const props = defineProps({
    additional: Object,
  });
  const emit = defineEmits(['showError']);

  const isOverDeleteButton = ref(false);
  const isDelete = ref(false);

  const deleteAdditional = async () => {
    if (isDelete.value) {
      return;
    }
    // вместо disabled на элементе, так как в таком случае не отрабатывается обработчик и соответственно stop, а тогда осуществляется переход по ссылке

    isDelete.value = true;

    const response = await fetch(
      'http://localhost:4000/lesson/additionals/' + props.additional._id,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );
    const payload = await response.json();

    if (!response.ok) {
      emit('showError', payload.error);
      isDelete.value = false;
    }

    if (response.ok) {
      storeAdditionalsCollection.deleteAdditional(payload);
      isDelete.value = false;
    }
  };
</script>

<template>
  <a
    class="additionals__link additionals__user-additionals additionals-link"
    :href="props.additional.address"
    target="_blank"
  >
    <div
      class="additionals-link__content"
      :title="props.additional.description"
    >
      {{ additional.name }}
      <button
        class="additionals-link__delete-button"
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
    </div>
  </a>
</template>

<style>
  .additionals-link__delete-button {
    position: absolute;
    right: 5px;
    top: 2px;
    color: black;
    background-color: transparent;
    cursor: default;
    line-height: 0;
    border: 0;
  }

  @media (max-width: 1600px) {
    .additionals__link {
      margin-left: 5px;
    }
  }
</style>
