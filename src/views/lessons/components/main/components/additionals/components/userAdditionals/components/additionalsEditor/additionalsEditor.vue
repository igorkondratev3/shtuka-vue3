<script setup>
  import CopyAdditionalButton from './components/copyAdditionalButton.vue';
  import DeleteAdditionalButton from './components/deleteAdditionalButton.vue';
  import EditAdditionalButton from './components/editAdditionalButton.vue';

  const props = defineProps({
    additional: Object,
  });
  defineEmits(['showError', 'openCreateAdditionalsForm']);
</script>

<template>
  <div class="user-additionals__editor">
    <DeleteAdditionalButton
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
    <CopyAdditionalButton 
      :additionalID="props.additional._id"
      @showError="(error) => $emit('showError', error)"
    />
  </div>
</template>

<style>
  .user-additionals__editor {
    display: flex;
    flex-direction: row-reverse;
    align-self: center;
    margin-top: 10px;
    width: 170px;
  }
</style>
