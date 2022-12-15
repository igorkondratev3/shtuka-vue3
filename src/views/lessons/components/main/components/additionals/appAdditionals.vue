<script setup>
  import VideoLessonURL from './components/videoLessonURL.vue';
  import TextBook from './components/textBook.vue';
  import ButtonForCreateAdditional from './components/buttonForCreateAdditional.vue';
  import CreateAdditionalsForm from './components/createAdditionalsForm/createAdditionalsForm.vue';
  import UserAdditionals from './components/userAdditionals/userAdditionals.vue';
  import NeedAuth from '@/views/generalComponents/needAuth/needAuth.vue';
  import ErrorVue from '@/views/generalComponents/error/errorVue.vue';
  import { ref, computed, watch } from 'vue';
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { lessonNum } from '@/stores/lessonNum';
  import { getElementsFromBackend } from '@/views/generalFunctions/requestsToBackend';

  const storeAdditionalsCollection = additionalsCollection();
  const storeLessonNum = lessonNum();
  const storeAuthContext = authContext();
  const createAdditionasFormSeen = ref(false);
  const needAuthSeen = ref(false);
  const error = ref('');
  const isCreateForm = ref(true);
  let additionalForEdit = ref({});
  const additionals = computed(() => {
    return storeAdditionalsCollection[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson];
  });

  if (storeAuthContext.user) {
    setAdditionalsInAdditionalsCollection();
  }

  watch(storeLessonNum, () => {
    if (storeAuthContext.user) {
      setAdditionalsInAdditionalsCollection();
    }
  });

  watch(storeAuthContext, () => {
    if (storeAuthContext.user) setAdditionalsInAdditionalsCollection();
    else createAdditionasFormSeen.value = false;
  });

  async function setAdditionalsInAdditionalsCollection() {
    if (
      !storeAdditionalsCollection[storeLessonNum.circle][storeLessonNum.grade][
        storeLessonNum.lesson
      ]
    ) {
      storeAdditionalsCollection.setAdditionals(
        await getElementsFromBackend(
          'additionals',
          storeLessonNum.circleNumber,
          storeLessonNum.gradeNumber,
          storeLessonNum.lessonNumber
        )
      );
    }
  }

  const openCreateAdditionalsForm = (whatIsForm, additional) => {
    if (!storeAuthContext.user) {
      needAuthSeen.value = true;
      return;
    }

    if (whatIsForm === 'create') {
      isCreateForm.value = true;
      createAdditionasFormSeen.value = true;
    }

    if (whatIsForm === 'edit') {
      isCreateForm.value = false;
      additionalForEdit.value = additional;
      createAdditionasFormSeen.value = true;
    }
  };
</script>

<template>
  <div class="lesson-main__additionals additionals">
    <div class="additionals__content">
      <div class="additionals__title">
        <b>Дополнительные материалы:</b>
      </div>
      <VideoLessonURL />
      <TextBook />
      <UserAdditionals
        v-for="additional in additionals"
        :key="additional.id"
        :additional="additional"
        @showError="(errorValue) => (error = errorValue)"
        @openCreateAdditionalsForm="
          (additional) => openCreateAdditionalsForm('edit', additional)
        "
      />
    </div>
    <ButtonForCreateAdditional @click="openCreateAdditionalsForm('create')" />
    <ErrorVue
      class="additionals__error"
      v-if="error"
      :error="error"
      @closeError="error = ''"
    />
    <CreateAdditionalsForm
      v-if="createAdditionasFormSeen"
      :isCreateForm="isCreateForm"
      :additionalForEdit="additionalForEdit"
      @closeCreateAdditionalForm="createAdditionasFormSeen = false"
    />
    <!-- v-if чтобы работал focus() -->
    <NeedAuth
      v-if="needAuthSeen"
      allowedAction="оставлять дополнения."
      @closeNeedAuth="needAuthSeen = false"
    />
  </div>
</template>

<style lang="scss">
  .additionals {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
    order: 3;
  }

  .additionals {
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-height: 500px;
      overflow: auto;
    }

    &__title {
      font: oblique 18px Times New Roman;
      text-align: center;
      color: black;
      margin-bottom: 10px;
      max-width: 150px;
    }
  }
  .additionals__error {
    width: 170px;
  }

  @media (max-width: 1600px) {
    .additionals {
      margin-top: 15px;
      order: 5;
    }
    .additionals__content {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .additionals__title {
      margin-bottom: 0px;
    }
  }
</style>
