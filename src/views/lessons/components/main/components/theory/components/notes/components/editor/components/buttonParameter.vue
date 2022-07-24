<script setup>
  import { ref } from 'vue';
  import {
    parameterOver,
    parameterOut,
    changeButtonParameterValue,
    letterParameterDefinition,
  } from './functions.js';
  const emits = defineEmits(['changeParameterValue']);
  const props = defineProps({ parameter: String });
  const parameterPressed = ref(false);
  const parameterTuningValues = ref({
    backgroundColor: '#C5C8CB',
    boxShadow: '2px 0px 1px #454B4E',
    fontWeight: '',
    fontStyle: '',
    textDecoration: '',
  });
</script>

<template>
  <div
    class="editor__parameter"
    @pointerover="parameterOver(parameterTuningValues)"
    @pointerout="parameterOut(parameterTuningValues)"
    @click="
      emits(
        'changeParameterValue',
        changeButtonParameterValue(parameterTuningValues)
      )
    "
    :style="parameterTuningValues"
  >
    {{ letterParameterDefinition(props.parameter) }}
  </div>
</template>

<style scoped>
  .editor__parameter {
    width: 20px;
    border: 0.5px solid black;
    border-radius: 30px;
    text-align: center;
    font-family: Times New Roman;
    margin-left: 3px;
    line-height: 13px;
    cursor: default;
    user-select: none;
  }
</style>
