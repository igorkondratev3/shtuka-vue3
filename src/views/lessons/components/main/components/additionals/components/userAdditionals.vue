<script setup>
  import { additionalsCollection } from '@/stores/additionalsCollection';
  import { authContext } from '@/stores/authContext';
  import { ref } from 'vue';

  const storeAuthContext = authContext();
  const storeAdditionalsCollection = additionalsCollection();
  const props = defineProps({
    additional: Object,
  });

  const isOverDeleteButton = ref(false);

  const deleteAdditional = async () => {
    const response = await fetch(
      'http://localhost:4000/lesson/additionals/' + props.additional._id,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );
    const payload = await response.json();

    if (response.ok) {
      storeAdditionalsCollection.deleteAdditional(payload);
    }
  }
</script>

<template>
  <a
    class="additionals__link additionals__user-additionals additionals-link"
    :href="props.additional.address"
    target="_blank"
  >
    <div
      class="additionals-link__content"
      :title="props.additional.description"
    >
      {{ additional.name }}
      <div
        class="additionals-link__delete-button"
        title="удалить"
        @click.stop.prevent="deleteAdditional"
        @pointerover="isOverDeleteButton = true"
        @pointerout="isOverDeleteButton = false"
      >
        <svg class="crossSVG">
          <line
            :class="{ line_red: isOverDeleteButton }"
            x1="0"
            y1="0"
            x2="10"
            y2="10"
            stroke-width="2"
            stroke="rgb(0,0,0)"
          />
          <line
            :class="{ line_red: isOverDeleteButton }"
            x1="0"
            y1="10"
            x2="10"
            y2="0"
            stroke-width="2"
            stroke="rgb(0,0,0)"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<style>
  .additionals-link__delete-button {
    position: absolute;
    right: 5px;
    top: 2px;
    color: black;
    cursor: default;
    line-height: 0;
  }

  .additionals-link__delete-button:hover {
    color: red;
  }

  .crossSVG {
    width: 10px;
    height: 10px;
  }

  .line_red {
    stroke: red;
  }

  @media (max-width: 1600px) {
    .additionals__link {
      margin-left: 5px;
    }
  }
</style>
