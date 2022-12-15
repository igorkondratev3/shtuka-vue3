<script setup>
  import AdditionalsEditor from './components/additionalsEditor/additionalsEditor.vue';

  const props = defineProps({
    additional: Object,
  });
  defineEmits(['showError', 'openCreateAdditionalsForm']);
</script>

<template>
  <div class="additionals__user-additionals user-additionals">
    <AdditionalsEditor
      :additional="props.additional"
      @showError="(error) => $emit('showError', error)"
      @openCreateAdditionalsForm="
        (additional) => $emit('openCreateAdditionalsForm', additional)
      "
    />
    <a
      class="additionals__link additionals-link user-additionals__link"
      :href="props.additional.address"
      target="_blank"
    >
      <div
        class="additionals-link__content"
        :title="props.additional.description"
      >
        {{ props.additional.name }}
      </div>
    </a>
  </div>
</template>

<style>
  .additionals__user-additionals {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .user-additionals__link {
    margin-top: 0;
  }

  @media (max-width: 1600px) {
    .additionals__link {
      margin-left: 5px;
    }
  }
</style>
