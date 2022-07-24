<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { changeColor } from '@/views/generalFunctions/functions.js';
  import { drawLines, drawCross } from './functions.js';
  const emits = defineEmits(['changeMenuContentSeen']);
  const props = defineProps({ menuContentSeen: Boolean });
  const areaForLinesAndCross = ref(null);
  watch(props, () => {
    if (props.menuContentSeen) {
      drawCross(
        areaForLinesAndCross.value.getContext('2d'),
        areaForLinesAndCross.value.width,
        areaForLinesAndCross.value.height
      );
    } else {
      drawLines(
        areaForLinesAndCross.value.getContext('2d'),
        areaForLinesAndCross.value.width,
        areaForLinesAndCross.value.height
      );
    }
  });
  const button = ref(null);
  onMounted(() => {
    drawLines(
      areaForLinesAndCross.value.getContext('2d'),
      areaForLinesAndCross.value.width,
      areaForLinesAndCross.value.height
    );
    changeColor(button.value);
  });
</script>

<template>
  <div
    ref="button"
    class="button menu__button button_border"
    @click.stop="emits('changeMenuContentSeen')"
  >
    <canvas
      class="button__lines"
      ref="areaForLinesAndCross"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style scoped lang="scss">
  .button {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: default;
    z-index: 9;
  }

  .menu {
    &__button {
      margin-right: 7px;
      margin-top: 5px;
    }
  }

  .button_border {
    border: 0.5px solid #0064a9;
  }
</style>
