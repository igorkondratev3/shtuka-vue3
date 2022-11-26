<script setup>
  import AppTheory from './components/theory/appTheory.vue';
  import AppExample from './components/example/appExample.vue';
  import AppAdditionals from './components/additionals/appAdditionals.vue';
  import AppTitel from './components/appTitel.vue';
  import AppNotes from './components/notes/appNotes.vue';
  import VisibilityControl from './components/visibilityControl/visibilityControl.vue';
  import { ref, computed, watch } from 'vue';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
  import { authContext } from '@/stores/authContext';
  import { lessonNum } from '@/stores/lessonNum';

  const storeTheoryNotesCollection = theoryNotesCollection();
  const storeLessonNum = lessonNum();
  const storeAuthContext = authContext();

  const notes = computed(() => {
    return storeTheoryNotesCollection[storeLessonNum.circle][
      storeLessonNum.grade
    ][storeLessonNum.lesson];
  });

  const visibilityControl = ref({
    titel: true,
    theory: true,
    example: true,
    additionals: true,
    notes: true,
  });
  const seenButtonsVisibilityControl = ref({
    titel: true,
    theory: true,
    example: true,
    additionals: true,
    notes: computed(() => {
      if (!notes.value) {
        return false;
      } else if (notes.value[0]) {
        return true;
      } else {
        return false;
      }
    }),
  });

  if (storeAuthContext.user) {
    setTheoryNotesInTheoryStoreCollection();
  }

  watch(storeLessonNum, () => {
    if (storeAuthContext.user) {
      setTheoryNotesInTheoryStoreCollection();
    }
  });

  async function setTheoryNotesInTheoryStoreCollection() {
    if (
      !storeTheoryNotesCollection[storeLessonNum.circle][storeLessonNum.grade][
        storeLessonNum.lesson
      ]
    ) {
      storeTheoryNotesCollection.setTheoryNotes(
        await getTheoryNotes(
          storeLessonNum.circleNumber,
          storeLessonNum.gradeNumber,
          storeLessonNum.lessonNumber
        )
      );
    }
  }

  async function getTheoryNotes(circleNumber, gradeNumber, lessonNumber) {
    const response = await fetch(
      `http://localhost:4000/lesson/theory-notes/${circleNumber}/${gradeNumber}/${lessonNumber}`,
      {
        headers: {
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );
    const theoryNotes = await response.json();
    if (!response.ok) {
      return false;
    }
    return theoryNotes;
  }

  const changeVisibility = (element) => {
    visibilityControl.value[element] = !visibilityControl.value[element];
  };
</script>

<template>
  <main class="lesson-layout__main lesson-main">
    <AppTitel
      class="lesson-main__titel"
      v-show="visibilityControl.titel"
    />
    <div class="lesson-main__content">
      <AppTheory v-show="visibilityControl.theory" />
      <AppExample v-show="visibilityControl.example" />
      <AppAdditionals v-show="visibilityControl.additionals" />
      <div
        class="lesson-main__notes"
        v-show="visibilityControl.notes && seenButtonsVisibilityControl.notes"
      >
        <AppNotes
          :note="note"
          v-for="note in notes"
          :key="note.id"
        />
      </div>
    </div>
    <VisibilityControl
      :visibilityControl="visibilityControl"
      :seenButtonsVisibilityControl="seenButtonsVisibilityControl"
      @changeVisibility="changeVisibility"
    />
  </main>
</template>

<style lang="scss">
  .lesson-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 16px;
  }

  .lesson-main {
    &__titel {
      align-self: flex-start;
      margin-bottom: 50px;
    }
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    &__notes {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      order: 4;
      overflow-x: auto; //уменьшает блок при уменьшении экрана
    }
  }

  @media (max-width: 1420px) {
    .lesson-main__content {
      justify-content: center;
    }
  }
</style>
