<script setup>
  import { computed, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { lessonsCollection } from '@/stores/lessonsCollection';
  import { lessonNum } from '@/stores/lessonNum';
  import { getLessons } from '../../generalFunctions/requestsToBackend';

  const props = defineProps({ circleAndGrade: Object });
  const storeLessonsCollection = lessonsCollection();

  setLessons();
  watch(props.circleAndGrade, () => {
    setLessons();
  });

  async function setLessons() {
    if (
      !storeLessonsCollection.isFull[
        `circle${props.circleAndGrade.circle}grade${props.circleAndGrade.grade}`
      ]
    ) {
      storeLessonsCollection.setLessons(
        await getLessons(
          props.circleAndGrade.circle,
          props.circleAndGrade.grade
        )
      );
    }
  }

  const storeLessonNum = lessonNum();
  const router = useRouter();

  const chooseLesson = (lessonNumber) => {
    storeLessonNum.changeLessonNumber(
      props.circleAndGrade.circle,
      props.circleAndGrade.grade,
      lessonNumber
    );
    router.push({ path: '/lessonLayout' });
  };

  const excludeLessonNumber = (content, contentIndex) => {
    if (contentIndex > 0) {
      return content;
    }
  };

  const lessons = computed(() => {
    return storeLessonsCollection['circle' + props.circleAndGrade.circle][
      'grade' + props.circleAndGrade.grade
    ];
  });

  const getLessonHeadings = (numberOfLesson) => {
    return lessons.value[
      `lesson${numberOfLesson + props.circleAndGrade.addForNumberOfLesson}`
    ]?.headings;
  };
</script>

<template>
  <div class="lessons-list__lessons lessons">
    <div
      class="lessons__lesson lesson"
      v-for="numberOfLesson in Object.keys(lessons).length"
      :key="numberOfLesson.id"
      @click="
        chooseLesson(numberOfLesson + props.circleAndGrade.addForNumberOfLesson)
      "
    >
      <!--перебираем номера так как объекты записываются не по порядку, не хочу записывать в массив чтобы не было разреженных и вообще так больше нравится-->
      <div class="lesson__number">
        {{ getLessonHeadings(numberOfLesson)[0] }}
      </div>
      <div class="lesson__theme">
        <template
          v-for="(head, headIndex) in getLessonHeadings(numberOfLesson)"
        >
          {{ excludeLessonNumber(head, headIndex) }} {{ ' ' }}
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .lessons-list__lessons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .lessons {
    &__lesson {
      font: oblique 16px 'Times New Roman';
      text-align: center;
      user-select: none;
      border: 0.5px dotted black;
      border-radius: 30px;
      width: 330px;
      height: 95px;
      margin: 10px;
      padding: 5px;
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
</style>
