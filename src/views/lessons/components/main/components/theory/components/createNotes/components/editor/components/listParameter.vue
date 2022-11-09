<script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import {
    drawArrowDown,
    changeListParameterValue,
    changeSeenOfListOfParameterValues,
    closeListOfPararmeterValues,
  } from './functions.js';

  const parameterTuningValues = ref({
    listOfValuesSeen: false,
    choosenValueSeen: true,
    arrowOpenListOfValues: true,
    borderValue: '0.5px solid black',
    choosenValueText: props.parameterListValue[0],
  });
  const emits = defineEmits(['changeStyleForNotesContent']);
  const props = defineProps({
    parameterListValue: Array,
    flagClearStyleForNotesContent: Object,
  });

  watch(props.flagClearStyleForNotesContent, () => {
    parameterTuningValues.value.choosenValueText = props.parameterListValue[0];
  }); //переработать

  const border = computed(() => {
    return {
      border: parameterTuningValues.value.borderValue,
    };
  });

  const arrowOpenList = ref(null);
  onMounted(() => {
    drawArrowDown(arrowOpenList.value.getContext('2d'));
  });
</script>

<template>
  <div
    class="editor__list list"
    :style="border"
    @click.stop="changeSeenOfListOfParameterValues(parameterTuningValues)"
  >
    <div class="list__choosen">
      <div
        class="list__choosen-value"
        v-show="parameterTuningValues.choosenValueSeen"
      >
        {{ parameterTuningValues.choosenValueText }}
      </div>
      <canvas
        class="list__open-list-of-values"
        ref="arrowOpenList"
        v-show="parameterTuningValues.arrowOpenListOfValues"
        width="14"
        height="14"
      >
      </canvas>
    </div>

    <div
      class="list__list-of-values list-of-values"
      @click.stop="
        emits(
          'changeStyleForNotesContent',
          changeListParameterValue(parameterTuningValues, $event)
        )
      "
      v-if="parameterTuningValues.listOfValuesSeen"
      @pointerleave="closeListOfPararmeterValues(parameterTuningValues)"
    >
      <div
        class="list-of-values__value"
        v-for="parameter in props.parameterListValue"
        :key="parameter.id"
      >
        {{ parameter }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .editor {
    &__list {
      font: 14px 'Times New Roman';
      cursor: default;
      user-select: none;
      background-color: #c5c8cb;
      border-radius: 30px;
      z-index: 7;
      width: 75px;
      height: 18px;
      margin-left: 3px;
    }

    &__list:hover {
      background-color: #e0e0e6;
    }
  }

  .list {
    &__choosen {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__choosen-value {
      overflow-x: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 1px 0px 0px 3px;
    }

    &__open-list-of-values {
      padding-right: 3px;
    }

    &__list-of-values {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
      overflow-x: hidden;
      cursor: default;
      user-select: none;
      z-index: 7;
      background-color: white; /*в мозиле красится скролл*/
      border: 0.5px solid black;
      border-radius: 10px 0px 0px 10px;
      max-height: 75px;
    }
  }

  .list-of-values {
    &__value {
      font: 14px 'Times New Roman';
      text-align: left;
      white-space: nowrap;
      cursor: default;
      user-select: none;
      z-index: 7;
      background-color: #c5c8cb;
      width: 100%; /*позволит при увеличении экрана оставлять цвет скрола корректным*/
      padding: 5px 0px 5px 3px;
      transition: background-color linear;
    }

    &__value:hover {
      background-color: #e0e0e6;
    }
  }
</style>
