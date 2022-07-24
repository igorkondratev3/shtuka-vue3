<script setup>
  import { computed } from 'vue';
  import { lessonInformation } from '@/stores/lessonInformation';
  import { lessonNum } from '@/stores/lessonNum';
  import { useRouter } from 'vue-router';
  const props = defineProps({ changedCircleAndGrade: Object });
  const storeLessonInformation = lessonInformation();
  const headings = computed(() => {
    return storeLessonInformation.lessons[
      'circle' + props.changedCircleAndGrade.circle
    ]['grade' + props.changedCircleAndGrade.grade];
  });
  const storeLessonNum = lessonNum();
  const router = useRouter();
  function chooseLesson(lessonNumber) {
    storeLessonNum.circleNumber = props.changedCircleAndGrade.circle;
    storeLessonNum.gradeNumber = props.changedCircleAndGrade.grade;
    storeLessonNum.lessonNumber = lessonNumber;
    router.push({ path: '/lessonLayout' });
  }
  function excludeLessonNumber(content, contentIndex) {
    if (contentIndex > 0) {
      return content;
    }
  }
</script>

<template>
  <div class="lessons-list__box-lessons box-lessons">
    <div
      class="box-lessons__lesson lesson"
      v-for="heading in headings"
      :key="heading.id"
      @click="chooseLesson(parseInt(heading.headings[0]))"
    >
      <div class="lesson__number">
        {{ heading.headings[0] }}
      </div>
      <div class="lesson__content">
        <template v-for="(head, headIndex) in heading.headings">
          {{ excludeLessonNumber(head, headIndex) }} </template
        ><!--template чтобы не запихивало в див и не переносило на новую строку-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .box-lessons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .box-lessons {
    &__lesson {
      margin: 10px;
      padding: 5px;
      border: 0.5px dotted black;
      border-radius: 30px;
      user-select: none;
      font: oblique 16px Times New Roman;
      text-align: center;
      width: 320px;
      height: 90px;
    }

    &__lesson:hover {
      background-color: #c5c8cb;
    }
  }

  .lesson {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }

  .lesson__number {
    color: rgb(255, 115, 0);
    font-weight: bold;
  }

  .links {
    cursor: default;
  }
</style>
