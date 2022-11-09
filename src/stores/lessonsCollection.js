import { defineStore } from 'pinia';

export const lessonsCollection = defineStore({
  id: 'lessonsCollection',
  state: () => ({
    lessons: {
      circle1: {
        grade7: {},
        grade8: {},
        grade9: {},
      },
      circle2: {
        grade9: {},
        grade10: {},
        grade11: {},
      },
    },

    numberOfGrade7Lessons: 50,
    numberOfGrade8Lessons: 62,
    numberOfCircle1Grade9Lessons: 20,
    numberOfCircle2Grade9Lessons: 18,
    numberOfGrade10Lessons: 5,
    numberOfGrade11Lessons: 6,

    isFull: {
      circle1Grade7: false,
      circle1Grade8: false,
      circle1Grade9: false,
      circle2Grade9: false,
      circle2Grade10: false,
      circle2Grade11: false,
    },
  }),
  actions: {
    setLesson(lesson) {
      if (lesson) {
        this.lessons[`circle${lesson.circle}`][`grade${lesson.grade}`][
          `lesson${lesson.lesson}`
        ] = lesson;
      }
    },
    setLessons(lessons) {
      if (lessons) {
        for (let lesson of lessons) {
          this.lessons[`circle${lesson.circle}`][`grade${lesson.grade}`][
            `lesson${lesson.lesson}`
          ] = lesson;
        }
        this.isFull[
          `circle${lessons[0].circle}grade${lessons[0].grade}`
        ] = true;
      }
    },
  },
});
