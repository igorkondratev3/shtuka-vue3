<script setup>
  import ButtonShowNotes from './components/buttonShowNotes/buttonShowNotes.vue';
  import AppNotes from './components/notes/appNotes.vue';
  import { ref, computed } from 'vue';
  import { lessonNum } from '@/stores/lessonNum';
  import { defineAsyncComponent } from 'vue';
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
  const theoryComponent = computed(() => {
    return componentsList[storeLessonNum.theoryComponentName];
  });
  const notesSeen = ref(false);
</script>

<template>
  <div class="shell-theory-and-notes">
    <div class="shell-theory">
      <Suspense>
        <component :is="theoryComponent">
          <template #buttonShowNotes>
            <ButtonShowNotes @click="notesSeen = !notesSeen" />
          </template>
        </component>

        <template #fallback>
          <div class="suspense">Загрузка теории...</div>
        </template>
      </Suspense>
    </div>
    <AppNotes v-show="notesSeen" />
  </div>
</template>

<style scoped>
  .shell-theory-and-notes {
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .shell-theory {
    max-width: 600px;
    border: 0.5px solid black;
    border-radius: 30px;
    background: linear-gradient(#bbb 0px, transparent 1px),
      linear-gradient(90deg, #bbb 0px, #f9f1fd 1px);
    background-size: 17px 17px;
  }

  .suspense {
    color: red;
    padding: 100px 100px;
  }
</style>
