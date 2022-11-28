<script setup>
  import { ref, onMounted } from 'vue';
  import { lessonNum } from '@/stores/lessonNum';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import ErrorVue from '@/views/generalComponents/error/errorVue.vue'

  const storeLessonNum = lessonNum();
  const storeAdditionalsCollection = additionalsCollection();
  const storeAuthContext = authContext();
  const emit = defineEmits(['closeCreateAdditionalForm']);
  const address = ref('');
  const name = ref('');
  const description = ref('');
  const isCreate = ref(false);
  const error = ref('');
  const resourceAddress = ref(null);

  onMounted(() => {
    resourceAddress.value.focus(); //через autofocus фокус работает только на первый раз
  })

  const addAdditional = async () => {
    isCreate.value = true;

    if (!address.value.trim().length) {
      error.value = 'Поле c адресом ресурса должно быть заполнено';
      isCreate.value = false;
      return;
    }

    const additional = {
      circle: storeLessonNum.circleNumber,
      grade: storeLessonNum.gradeNumber,
      lesson: storeLessonNum.lessonNumber,
      address: address.value,
      name: name.value,
      description: description.value,
    };

    const response = await fetch('http://localhost:4000/lesson/additionals', {
      method: 'POST',
      body: JSON.stringify(additional),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${storeAuthContext.user?.token}`,
      },
    });

    const payload = await response.json();

    if (!response.ok) {
      error.value = payload.error;
      isCreate.value = false;
    }

    if (response.ok) {
      storeAdditionalsCollection.setAdditional(payload);
      address.value = '';
      name.value = '';
      description.value = '';
      emit('closeCreateAdditionalForm');
      isCreate.value = false;
    }
  };
</script>

<template>
  <div class="additionals__create-additionals create-additionals">
    <div class="create-additionals__form">
      <div
        class="create-additionals__close-button"
        @click="$emit('closeCreateAdditionalForm')"
      >
        <span class="material-symbols-outlined"> close </span>
      </div>

      <label>Адрес ресурса</label>
      <input
        type="text"
        class="create-additionals__input"
        v-model="address"
        ref="resourceAddress"
      />
      <label>Обозначение ресурса</label>
      <input
        type="text"
        v-model="name"
        class="create-additionals__input"
      />
      <label>Описание ресурса</label>
      <input
        type="text"
        v-model="description"
        class="create-additionals__input"
      />
      <button
        class="create-additionals__create-button"
        @click="addAdditional"
        :disabled="isCreate"
        :class="{ disabled: isCreate }"
      >
        Создать дополнение
      </button>
      <ErrorVue
        class="create-additionals__error"
        v-if="error" 
        :error="error"
        @closeError="error=''"
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
      border: 1px solid rgb(37, 5, 219);
    }

    &__create-button {
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
    &__create-button:hover {
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
