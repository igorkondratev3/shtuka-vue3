<script setup>
  import ButtonShowCreateNotes from './components/buttonShowCreateNotes/buttonShowCreateNotes.vue';
  import CreateNotes from './components/createNotes/CreateNotes.vue';
  import NeedAuth from '@/views/generalComponents/needAuth/needAuth.vue';
  import { ref, computed, watch } from 'vue';
  import { lessonNum } from '@/stores/lessonNum';
  import { defineAsyncComponent } from 'vue';
  import { authContext } from '@/stores/authContext';

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
  const needAuthSeen = ref(false);
  const storeAuthContext = authContext();

  watch(storeAuthContext, () => {
    if (!storeAuthContext.user) {
      notesSeen.value = false;
    }
  });
</script>

<template>
  <div class="main__theory lesson-theory">
    <Suspense>
      <component :is="theoryComponent"></component>
      <template #fallback>
        <div class="suspense">Загрузка теории...</div>
      </template>
    </Suspense>
    <ButtonShowCreateNotes
      @click="
        storeAuthContext.user ? (notesSeen = !notesSeen) : (needAuthSeen = true)
      "
    />
    <KeepAlive>
      <CreateNotes 
        v-if="notesSeen" 
        :editFromSeen="false"
        />
    </KeepAlive>
    <NeedAuth
      v-if="needAuthSeen"
      allowedAction="оставлять пометки."
      @closeNeedAuth="needAuthSeen = false"
    />
  </div>
</template>

<style>
  .lesson-theory {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    order: 1;
  }

  .lesson-theory__suspense {
    color: red;
    padding: 100px 100px;
  }
</style>
