<script setup>
  import { computed, defineAsyncComponent } from 'vue';
  import { lessonNum } from '@/stores/lessonNum';
  const Circle1Lesson1 = defineAsyncComponent(() =>
    import(`./components/circle1/lesson1/lesson1Vue.vue`)
  );
  const Circle1Lesson2 = defineAsyncComponent(() =>
    import(`./components/circle1/lesson2/lesson2Vue.vue`)
  );
  const componentsList = {
    Circle1Lesson1,
    Circle1Lesson2,
  };
  const storeLessonNum = lessonNum();
  const exampleComponent = computed(() => {
    return componentsList[storeLessonNum.theoryComponentName];
  });
</script>

<template>
  <div class="example">
    <Suspense>
      <component :is="exampleComponent"></component>

      <template #fallback>
        <div class="suspense">Загрузка примера...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
  .example {
    margin: 0px 10px;
    order: 2;
    line-height: 0;
  }

  @media (max-width: 1172px) {
    .example {
      margin-right: 60px;
    }
  }
  @media (max-width: 1109px) {
    .example {
      margin-right: 10px;
    }
  }

  @media (max-width: 1014px) {
    .example {
      order: 3;
      margin-top: 10px;
    }
  }

  .suspense {
    color: blue;
    padding: 100px 100px;
    border: 0.5px solid black;
    border-radius: 30px;
  }
</style>
