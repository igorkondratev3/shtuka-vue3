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
  <div class="lesson-main__example example">
    <Suspense>
      <component :is="exampleComponent"></component>

      <template #fallback>
        <div class="example__suspense">Загрузка примера...</div>
      </template>
    </Suspense>
  </div>
</template>

<style>
  .lesson-main__example {
    order: 2;
    margin: 0px 10px;
    line-height: 0;
  }

  @media (max-width: 1172px) {
    .lesson-main__example {
      margin-right: 60px;
    }
  }
  @media (max-width: 1109px) {
    .lesson-main__example {
      margin-right: 10px;
    }
  }

  @media (max-width: 1014px) {
    .lesson-main__example {
      order: 3;
      margin-top: 10px;
    }
  }

  .example__suspense {
    color: blue;
    border: 0.5px solid black;
    border-radius: 30px;
    padding: 100px 100px;
  }
</style>
