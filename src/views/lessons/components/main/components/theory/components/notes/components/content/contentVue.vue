<script setup>
  import { computed } from 'vue';
  const props = defineProps({ changedParameter: Object });
  const changedStyleNotesContent = computed(() => {
    return {
      lineHeight: props.changedParameter.lineHeight,
      paddingTop: props.changedParameter.paddingTop,
      fontSize: props.changedParameter.fontSize,
      color: props.changedParameter.color,
      fontFamily: props.changedParameter.fontFamily,
      fontWeight: props.changedParameter.fontWeight,
      fontStyle: props.changedParameter.fontStyle,
      textDecoration: props.changedParameter.textDecoration,
    };
  });
</script>

<template>
  <div
    class="notes__content"
    contenteditable="true"
    :style="changedStyleNotesContent"
  ></div>
</template>

<style scoped>
  .notes__content {
    min-height: 100px;
    border: 0.5px solid black;
    padding: 19px 10px 13px 16px;
    outline: none; /*чтобы не появлялся коонтур при введении*/
    overflow-wrap: break-word;
    background: linear-gradient(#bbb 0px, transparent 1px),
      linear-gradient(90deg, #bbb 0px, #f9f1fd 1px);
    background-size: 17px 17px;
    background-attachment: local;
    max-height: 400px;
    overflow-y: auto;
    text-align: left;
    font: 16px Times New Roman;
    border-radius: 30px;
  }
</style>
