<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { changeColor } from '@/views/generalFunctions/changeColor.js';
  import { drawLines, drawCross } from './functions.js';

  const emits = defineEmits(['changeMenuContentSeen']);
  const props = defineProps({ menuContentSeen: Boolean });
  const button = ref(null);
  const areaForLinesAndCross = ref(null);
  let contextAreaForLinesAndCross;

  onMounted(() => {
    contextAreaForLinesAndCross = areaForLinesAndCross.value.getContext('2d');
    drawLines(
      contextAreaForLinesAndCross,
      areaForLinesAndCross.value.width,
      areaForLinesAndCross.value.height
    );
    changeColor(button.value);
  });

  watch(props, () => {
    if (props.menuContentSeen) {
      drawCross(
        contextAreaForLinesAndCross,
        areaForLinesAndCross.value.width,
        areaForLinesAndCross.value.height
      );
    } else {
      drawLines(
        contextAreaForLinesAndCross,
        areaForLinesAndCross.value.width,
        areaForLinesAndCross.value.height
      );
    }
  });
</script>

<template>
  <div
    ref="button"
    class="menu-button round-button"
    @click.stop="emits('changeMenuContentSeen')"
  >
    <canvas
      ref="areaForLinesAndCross"
      width="32"
      height="32"
    >
    </canvas>
  </div>
</template>

<style>
  .menu-button {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
