<script setup>
  import { lessonNum } from '@/stores/lessonNum.js';
  import { theoryNotesCollection } from '@/stores/theoryNotesCollection.js';
  import { authContext } from '@/stores/authContext.js';
  import { ref } from 'vue';
  import { getNewTokens, updateTokens } from '@/views/generalFunctions/refreshToken.js';

  const storeLessonNum = lessonNum();
  const storeTheoryNotesCollection = theoryNotesCollection();
  const storeAuthContext = authContext();

  const emits = defineEmits([
    'calucalateWidthAndHeightForNote',
    'showError',
    'closeEditNoteForm',
  ]);
  const props = defineProps({
    textNotes: String,
    styleForNotesContent: Object,
    widthAndHeightForNote: Object,
    editNoteID: String,
  });

  const isEdit = ref(false);

  const editNote = async () => {
    isEdit.value = true;

    if (!props.textNotes.trim().length) {
      emits('showError', 'Поле для пометок должно быть заполнено');
      isEdit.value = false;
      return;
    }

    emits('calucalateWidthAndHeightForNote');
    const note = {
      _id: props.editNoteID,
      circle: storeLessonNum.circleNumber,
      grade: storeLessonNum.gradeNumber,
      lesson: storeLessonNum.lessonNumber,
      text: props.textNotes,
      textStyle: {},
    };

    for (let key in props.styleForNotesContent) {
      note.textStyle[key] = props.styleForNotesContent[key];
    }

    note.textStyle.width = props.widthAndHeightForNote.width + 'px';
    note.textStyle.height = props.widthAndHeightForNote.height + 'px';

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URI}/lesson/theory-notes`,
      {
        method: 'PATCH',
        body: JSON.stringify(note),
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
      updateTokens(tokens);
      editNote();
      return;
    }

    if (!response.ok) {
      emits('showError', payload.error);
      isEdit.value = false;
    }

    if (response.ok) {
      storeTheoryNotesCollection.editTheoryNote(payload);
      emits('closeEditNoteForm');
      isEdit.value = false;
    }
  };
</script>

<template>
  <button
    @click="editNote"
    class="notes__button"
    :disabled="isEdit"
  >
    Сохранить изменения
  </button>
  <button
    class="notes__button"
    @click="emits('closeEditNoteForm')"
  >
    Отменить
  </button>
</template>

<style>
  .notes__button {
    font: 14px 'Times New Roman';
    border-radius: 20px;
    max-width: 150px;
    margin-left: 25px;
    margin-top: 1px;
  }
</style>
