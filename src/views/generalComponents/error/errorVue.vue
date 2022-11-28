<script setup>
  const props = defineProps({
    error: String,
  });
  const emits = defineEmits(['closeError'])
  setTimeout(() => (emits('closeError')), 5000);
</script>

<template>
  <div class="error">
    {{ props.error }}
  </div>  
</template>

<style>
  @import '@/assets/error.css';
</style>