<script setup>
  import DeleteAdditionalsButton from './components/deleteAdditionalButton.vue';
  import EditAdditionalButton from './components/editAdditionalButton.vue';

  const props = defineProps({
    additional: Object,
  });
  defineEmits(['showError', 'openCreateAdditionalsForm']);
</script>

<template>
  <div class="additionals__editor">
    <DeleteAdditionalsButton
      :additional="props.additional"
      @showError="(error) => $emit('showError', error)"
    />
    <EditAdditionalButton
      :additional="props.additional"
      @showError="(error) => $emit('showError', error)"
      @openCreateAdditionalsForm="
        (additional) => $emit('openCreateAdditionalsForm', additional)
      "
    />
  </div>
</template>

<style>
  .additionals__editor {
    display: flex;
    flex-direction: row-reverse;
    align-self: center;
    margin-top: 10px;
    width: 170px;
  }
</style>
