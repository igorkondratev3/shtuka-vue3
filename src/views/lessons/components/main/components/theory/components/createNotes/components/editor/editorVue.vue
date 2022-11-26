<script setup>
  import ListParameter from './components/listParameter.vue';
  import ButtonParameter from './components/buttonParameter.vue';

  const emits = defineEmits(['changeStyleForNotesContent']);
  const props = defineProps({ flagClearStyleForNotesContent: Object });
  const colorsList = [
    '-цвет-',
    'черный',
    'красный',
    'синий',
    'зеленый',
    'серый',
  ];
  const sizesList = [
    '-размер-',
    '8pt',
    '10pt',
    '12pt',
    '14pt',
    '16pt',
    '18pt',
    '20pt',
    '22pt',
    '24pt',
  ];
  const familiesList = [
    '-шрифт-',
    'Times New Roman',
    'Arial',
    'Calibri',
    'Cambria',
  ];

  function changeStyleForNotesContent(changedParameter) {
    emits('changeStyleForNotesContent', changedParameter);
  }
</script>

<template>
  <div class="notes__editor editor">
    <ListParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      :parameterListValue="colorsList"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
    <ListParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      :parameterListValue="sizesList"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
    <ListParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      :parameterListValue="familiesList"
      class="editor__family-list-parameter_width"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
    <ButtonParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      parameter="fontWeight"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
    <ButtonParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      parameter="fontStyle"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
    <ButtonParameter
      @changeStyleForNotesContent="changeStyleForNotesContent"
      parameter="textDecoration"
      :flagClearStyleForNotesContent="props.flagClearStyleForNotesContent"
    />
  </div>
</template>

<style>
  .editor {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .notes__editor {
    padding-left: 25px;
    margin-bottom: 1px;
  }

  .editor__family-list-parameter_width {
    width: 135px;
  }

  @media (max-width: 465px) {
    .editor__family-list-parameter_width {
      width: 75px;
    }
  }
</style>
