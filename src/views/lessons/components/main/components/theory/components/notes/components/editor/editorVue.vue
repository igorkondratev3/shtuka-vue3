<script setup>
  import ListParameter from './components/listParameter.vue';
  import ButtonParameter from './components/buttonParameter.vue';
  import AddFile from './components/addFile.vue';
  const emits = defineEmits(['changeParameterValue']);
  function changeParameterValue(changedParameter) {
    emits('changeParameterValue', changedParameter);
  }
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
</script>

<template>
  <div class="notes__editor editor">
    <ListParameter
      @changeParameterValue="changeParameterValue"
      :parameterListValue="colorsList"
    />
    <ListParameter
      @changeParameterValue="changeParameterValue"
      :parameterListValue="sizesList"
    />
    <ListParameter
      @changeParameterValue="changeParameterValue"
      :parameterListValue="familiesList"
      class="family-list-parameter_width"
    />
    <ButtonParameter
      @changeParameterValue="changeParameterValue"
      parameter="fontWeight"
    />
    <ButtonParameter
      @changeParameterValue="changeParameterValue"
      parameter="fontStyle"
    />
    <ButtonParameter
      @changeParameterValue="changeParameterValue"
      parameter="textDecoration"
    />
    <AddFile />
  </div>
</template>

<style scoped>
  .notes__editor {
    padding-left: 25px;
    margin-bottom: 1px;
  }

  .editor {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .family-list-parameter_width {
    width: 135px;
  }

  @media (max-width: 465px) {
    .family-list-parameter_width {
      width: 75px;
    }
  }
</style>
