<script setup>
  import { computed, ref } from 'vue';
  import ButtonForCreateNote from './components/buttonForCreateNote.vue';

  const emits = defineEmits(['clearStyleForNotesContent']);
  const props = defineProps({
    styleForNotesContent: Object,
  });
  const styleForNotesContent = computed(() => {
    return {
      fontSize: props.styleForNotesContent.fontSize,
      color: props.styleForNotesContent.color,
      fontFamily: props.styleForNotesContent.fontFamily,
      fontWeight: props.styleForNotesContent.fontWeight,
      fontStyle: props.styleForNotesContent.fontStyle,
      textDecoration: props.styleForNotesContent.textDecoration,
    };
  });
  const widthAndHeightForNote = computed(() => {
    return {
      width: offsetWidthNotesContent,
      height: offsetHeightNotesContent,
    };
  });
  const textNotes = ref('');
  let offsetWidthNotesContent = ref(0);
  let offsetHeightNotesContent = ref(0);
  const notesContent = ref(null);
  const error = ref(null);

  const calucalateWidthAndHeightForNote = () => {
    offsetWidthNotesContent.value = notesContent.value.offsetWidth;
    offsetHeightNotesContent.value = notesContent.value.offsetHeight;
    console.log(notesContent.value);
  }

  const clearTextAndStyleForNotesContent = () => {
    textNotes.value = '';
    emits('clearStyleForNotesContent');
  }

  function showError(errorValue) {
    error.value = errorValue;
    setTimeout(() => error.value = null, 5000);
  }
</script>

<template>
  <textarea
    v-model="textNotes" 
    class="notes__content"
    :style="styleForNotesContent"
    ref="notesContent"
  ></textarea>
  <ButtonForCreateNote
    :textNotes="textNotes"
    :styleForNotesContent="styleForNotesContent"
    :widthAndHeightForNote="widthAndHeightForNote"
    @calucalateWidthAndHeightForNote="calucalateWidthAndHeightForNote"
    @clearTextAndStyleForNotesContent="clearTextAndStyleForNotesContent"
    @showError="showError"
  />
  <div
    class="notes__error error"
    v-show="error"
  >
    {{ error }}
  </div>
</template>

<style>
  .notes__content {
    font: 16px 'Times New Roman';
    text-align: left;
    overflow-wrap: break-word;
    overflow-y: auto;
    outline: none; /*чтобы не появлялся коонтур при введении*/
    background-color: rgba(231, 229, 229, 0.548);
    border: 0.5px solid black;
    border-radius: 30px;
    padding: 5px 10px 5px 16px;
    max-height: 400px;
    max-width: 600px;
  }

  @media (max-width: 650px) {
    .notes__content {
      max-width: 400px;
    }
  }

  .notes__error {
    max-width: 350px;
  }
</style>
