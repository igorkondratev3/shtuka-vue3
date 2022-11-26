<script setup>
  const props = defineProps({
    isOverDeleteButton: Boolean,
    isDelete: Boolean,
  });
</script>

<template>
  <svg class="crossSVG">
    <line
      :class="{
        line_red: props.isOverDeleteButton,
        'disabled-delete': props.isDelete,
      }"
      x1="0"
      y1="0"
      x2="10"
      y2="10"
      stroke-width="2"
      stroke="rgb(0,0,0)"
    />
    <line
      :class="{
        line_red: props.isOverDeleteButton,
        'disabled-delete': props.isDelete,
      }"
      x1="0"
      y1="10"
      x2="10"
      y2="0"
      stroke-width="2"
      stroke="rgb(0,0,0)"
    />
  </svg>
</template>

<style>
  .crossSVG {
    width: 10px;
    height: 10px;
  }

  .line_red {
    stroke: red;
  }

  .disabled-delete,
  .disabled-delete:hover {
    stroke: rgb(212, 208, 208);
  }
</style>
