<script setup>
  import { computed, ref, onActivated } from 'vue';
  import ButtonForCreateNote from './components/buttonForCreateNote.vue';
  import ErrorVue from '@/views/generalComponents/error/errorVue.vue';

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
  const error = ref('');

  onActivated(() => {
    notesContent.value.focus();
  })

  const calucalateWidthAndHeightForNote = () => {
    offsetWidthNotesContent.value = notesContent.value.offsetWidth;
    offsetHeightNotesContent.value = notesContent.value.offsetHeight;
  };

  const clearTextAndStyleForNotesContent = () => {
    textNotes.value = '';
    emits('clearStyleForNotesContent');
  };
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
    @showError="(errorValue) => error = errorValue"
  />
  <ErrorVue 
    class = "notes__error"
    v-if="error"
    :error="error"
    @closeError="error = ''"
  />
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
    margin-top: 20px;
  }
</style>
