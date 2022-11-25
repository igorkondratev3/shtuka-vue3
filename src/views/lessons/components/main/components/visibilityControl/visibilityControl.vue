<script setup>
  const props = defineProps({
    visibilityControl: Object,
    seenButtonsVisibilityControl: Object,
  });

  const emits = defineEmits(['changeVisibility']);
  const visibilityControlButtons = {
    titel: 'Заголовок',
    theory: 'Теория',
    example: 'Пример',
    additionals: 'Доп. материалы',
    notes: 'Пометки',
  };
</script>

<template>
  <div class="lesson-main__visibility-control visibility-control">
    <div
      class="visibility-control__button"
      v-for="(button, keyButton) in visibilityControlButtons"
      :key="button.id"
      :class="{ button__pressed: props.visibilityControl[keyButton] }"
      @click="emits('changeVisibility', keyButton)"
      v-show="props.seenButtonsVisibilityControl[keyButton]"
    >
      {{ button }}
    </div>
  </div>
</template>

<style>
  .visibility-control {
    position: fixed;
    bottom: 10px;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 998;
    width: 100vw;
    overflow-x: auto;
  }

  .visibility-control__button {
    font: 16px 'Times New Roman';
    user-select: none;
    background-color: rgba(218, 210, 210, 0.795);
    border: 1px solid black;
    border-radius: 30px;
    padding: 5px;
    margin: 5px 5px;
    white-space: nowrap;
    overflow: visible;
  }

  .visibility-control__button:hover {
    background-color: rgba(34, 125, 139, 0.685);
  }

  .button__pressed {
    background-color: rgba(78, 76, 76, 0.685);
    color: white;
  }

  @media (max-width: 444px) {
    .visibility-control {
      padding-left: 75px; /*при появлении скролла первый блок обрезается*/
    }
  }
</style>
