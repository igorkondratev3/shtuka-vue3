import { defineStore } from 'pinia';

export const lessonNum = defineStore({
  id: 'lessonNum',
  state: () => ({
    circleNumber: 1,
    gradeNumber: 7,
    lessonNumber: 1,
  }),
  getters: {
    circle: (state) => 'circle' + state.circleNumber,
    grade: (state) => 'grade' + state.gradeNumber,
    lesson: (state) => 'lesson' + state.lessonNumber,
    theoryComponentName: (state) =>
      `Circle${state.circleNumber}Lesson${state.lessonNumber}`,
  },
});
