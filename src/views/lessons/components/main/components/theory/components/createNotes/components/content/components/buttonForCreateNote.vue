<script setup>
  import { lessonNum } from '@/stores/lessonNum';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection';
  import { authContext } from '@/stores/authContext';
  import { ref } from 'vue';

  const storeLessonNum = lessonNum();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const storeAuthContext = authContext();

  const emits = defineEmits([
    'clearTextAndStyleForNotesContent',
    'calucalateWidthAndHeightForNote',
    'showError',
  ]);
  const props = defineProps({
    textNotes: String,
    styleForNotesContent: Object,
    widthAndHeightForNote: Object,
  });

  const isCreate = ref(false);

  const createNote = async () => {
    isCreate.value = true;

    if (!props.textNotes.trim().length) {
      emits('showError', 'Поле для пометок должно быть заполнено');
      isCreate.value = false;
      return;
    }

    emits('calucalateWidthAndHeightForNote');
    const note = {
      circle: storeLessonNum.circleNumber,
      grade: storeLessonNum.gradeNumber,
      lesson: storeLessonNum.lessonNumber,
      text: props.textNotes,
      textStyle: {},
    };

    for (let key in props.styleForNotesContent) {
      note.textStyle[key] = props.styleForNotesContent[key];
    }

    note.textStyle.width = props.widthAndHeightForNote.width.value + 'px';
    note.textStyle.height = props.widthAndHeightForNote.height.value + 'px';

    const response = await fetch('http://localhost:4000/lesson/theory-notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${storeAuthContext.user?.token}`,
      },
    });

    const payload = await response.json();

    if (!response.ok) {
      emits('showError', payload.error);
      isCreate.value = false;
    }

    if (response.ok) {
      storeTheoryNotesCollection.setTheoryNote(payload);
      emits('clearTextAndStyleForNotesContent');
      isCreate.value = false;
    }
  };
</script>

<template>
  <button
    @click="createNote"
    class="notes__create-button"
    :disabled="isCreate"
  >
    Создать пометку
  </button>
</template>

<style>
  .notes__create-button {
    font: 14px 'Times New Roman';
    border-radius: 20px;
    max-width: 150px;
    margin-left: 25px;
    margin-top: 1px;
  }
</style>
