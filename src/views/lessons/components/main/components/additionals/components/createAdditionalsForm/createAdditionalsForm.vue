<script setup>
  import { ref, computed, watch } from 'vue';
  import ErrorVue from '@/views/generalComponents/error/errorVue.vue';
  import { checkClose } from '@/views/generalFunctions/checkClose';
  import AddButtonAdditionalForm from './components/addButtonAdditionalForm.vue';
  import EditButtonAdditionalForm from './components/editButtonAdditionalForm.vue';

  const emit = defineEmits(['closeCreateAdditionalForm']);
  const address = ref('');
  const name = ref('');
  const description = ref('');
  const error = ref('');
  const resourceAddress = ref(null);

  const correctAdditionalValues = computed(() => ({
    address: address.value,
    name: name.value,
    description: description.value,
  }));

  const props = defineProps({
    isCreateForm: Boolean,
    additionalForEdit: Object,
  });

  watch(
    () => props.additionalForEdit,
    () => {
      if (props.additionalForEdit.address) {
        address.value = props.additionalForEdit.address;
        name.value = props.additionalForEdit.name;
        description.value = props.additionalForEdit.description;
      }
    }
  );

  const handleCloseFormFromButtons = () => {
    address.value = '';
    name.value = '';
    description.value = '';
    emit('closeCreateAdditionalForm');
  };
</script>

<template>
  <div
    class="additionals__create-additionals create-additionals"
    @click="checkClose($event) ? handleCloseFormFromButtons() : undefined"
  >
    <div class="create-additionals__form">
      <div
        class="create-additionals__close-button"
        @click="handleCloseFormFromButtons"
      >
        <span class="material-symbols-outlined"> close </span>
      </div>
      <form>
        <label for="address">Адрес ресурса</label>
        <input
          type="url"
          class="create-additionals__input"
          id="address"
          v-model="address"
          ref="resourceAddress"
          required
        />
        <label for="name">Обозначение ресурса</label>
        <input
          type="text"
          v-model="name"
          class="create-additionals__input"
          id="name"
        />
        <label for="description">Описание ресурса</label>
        <input
          type="text"
          v-model="description"
          class="create-additionals__input"
          id="description"
        />
        <AddButtonAdditionalForm
          v-if="props.isCreateForm"
          :resourceAddress="resourceAddress"
          :correctAdditionalValues="correctAdditionalValues"
          @showError="(errorValue) => (error = errorValue)"
          @closeCreateAdditionalForm="handleCloseFormFromButtons"
        />
        <EditButtonAdditionalForm
          v-if="!props.isCreateForm"
          :resourceAddress="resourceAddress"
          :additionalID="props.additionalForEdit._id"
          :correctAdditionalValues="correctAdditionalValues"
          @showError="(errorValue) => (error = errorValue)"
          @closeCreateAdditionalForm="handleCloseFormFromButtons"
        />
      </form>
      <ErrorVue
        class="create-additionals__error"
        v-if="error"
        :error="error"
        @closeError="error = ''"
      />
      <!--v-if здесь, а не на компонентах и не v-show так как хочу чтобы код в error отрабатывался при открытии-->
    </div>
  </div>
</template>

<style lang="scss">
  .create-additionals {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.788);
    backdrop-filter: blur(5px);
  }

  .create-additionals {
    &__form {
      font-family: 'Times New Roman', Times, serif;
      font-size: 18px;
      max-width: 600px;
      padding: 20px 20px;
      border-radius: 10px;
      background-color: rgb(239, 240, 236);
    }

    &__close-button {
      position: absolute;
      right: 0;
      top: 0;
      overflow-x: hidden;
      cursor: default;
      max-width: 34px;
      padding-top: 3px;
      padding-left: 1px;
      width: 25px;
      border-radius: 0px 10px 0px 0px;
    }
    &__close-button:hover {
      background-color: rgb(116, 107, 107);
    }

    &__input {
      font-family: 'Times New Roman', Times, serif;
      font-size: 18px;
      outline: none;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      margin-bottom: 20px;
      margin-top: 3px;
    }
    &__input:focus {
      border: 1px solid rgb(12, 82, 87);
    }

    &__button {
      font-family: 'Times New Roman', Times, serif;
      font-size: 14px;
      color: rgb(239, 240, 236);
      background-color: rgb(25, 25, 136);
      border-radius: 10px;
      border: 0;
      width: 60%;
      margin-left: 20%;
      padding: 3px 0px;
    }
    &__button:hover {
      background-color: rgb(88, 88, 165);
    }
    &__error {
      margin-top: 20px;
    }
  }

  .disabled,
  .disabled:hover {
    background-color: rgb(212, 208, 208);
  }
</style>
