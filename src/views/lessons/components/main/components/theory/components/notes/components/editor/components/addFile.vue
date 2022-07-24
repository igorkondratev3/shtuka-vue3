<script setup>
  import { ref, onMounted } from 'vue';
  import { drawClip } from './functions.js';
  const clip = ref(null);
  onMounted(() => {
    drawClip(clip.value.getContext('2d'));
  });
</script>

<template>
  <div class="editor__add-file add-file">
    <canvas
      class="add-file__clip"
      ref="clip"
      width="20"
      height="18"
    >
    </canvas>
    <div class="add-file__button">
      <form
        method="post"
        enctype="multipart/form-data"
        action=""
      >
        <input
          type="file"
          class="add-file__input"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
  .editor__add-file {
    height: 18px;
    width: 20px;
    margin-left: 3px;
    position: relative;
    border-radius: 30%;
  }

  .editor__add-file:hover {
    background-color: #c5c8cb;
  }

  .add-file__button {
    z-index: 8;
    height: 18px;
    width: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0%;
  }

  .add-file__input {
    height: 18px;
    width: 20px;
  }
</style>
