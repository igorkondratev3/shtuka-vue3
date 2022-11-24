export const calculateLessonNumberForNextLesson = (
  storeLessonNum,
  storeLessonsCollection
) => {
  if (
    storeLessonNum.circleNumber == 2 &&
    storeLessonNum.lessonNumber ==
      storeLessonsCollection.numberOf.circle2Grade9Lessons +
        storeLessonsCollection.numberOf.grade10Lessons +
        storeLessonsCollection.numberOf.grade11Lessons
  ) {
    return [1, 7, 1];
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOf.grade7Lessons ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOf.grade7Lessons +
            storeLessonsCollection.numberOf.grade8Lessons)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOf.circle2Grade9Lessons ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOf.circle2Grade9Lessons +
            storeLessonsCollection.numberOf.grade10Lessons))
  ) {
    return [
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber + 1,
      storeLessonNum.lessonNumber + 1,
    ];
  } else if (
    storeLessonNum.circleNumber == 1 &&
    storeLessonNum.lessonNumber ==
      storeLessonsCollection.numberOf.grade7Lessons +
        storeLessonsCollection.numberOf.grade8Lessons +
        storeLessonsCollection.numberOf.circle1Grade9Lessons
  ) {
    return [2, storeLessonNum.gradeNumber, 1];
  } else {
    return [
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber,
      storeLessonNum.lessonNumber + 1,
    ];
  }
}

export const calculateLessonNumberForPreviousLesson = (
  storeLessonNum,
  storeLessonsCollection
) => {
  if (storeLessonNum.lessonNumber == 1) {
    switch (storeLessonNum.gradeNumber) {
      case 7:
        return [
          2,
          11,
          storeLessonsCollection.numberOf.circle2Grade9Lessons +
            storeLessonsCollection.numberOf.grade10Lessons +
            storeLessonsCollection.numberOf.grade11Lessons,
        ];
      case 9:
        return [
          1,
          storeLessonNum.gradeNumber,
          storeLessonsCollection.numberOf.circle1Grade9Lessons +
            storeLessonsCollection.numberOf.grade7Lessons +
            storeLessonsCollection.numberOf.grade8Lessons,
        ];
    }
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOf.grade7Lessons + 1 ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOf.grade7Lessons +
            storeLessonsCollection.numberOf.grade8Lessons +
            1)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOf.circle2Grade9Lessons + 1 ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOf.circle2Grade9Lessons +
            storeLessonsCollection.numberOf.grade10Lessons +
            1))
  ) {
    return [
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber - 1,
      storeLessonNum.lessonNumber - 1,
    ];
  } else {
    return [
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber,
      storeLessonNum.lessonNumber - 1,
    ];
  }
}
