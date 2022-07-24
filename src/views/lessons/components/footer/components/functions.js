export function drawArrowLeft(left) {
  left.beginPath();
  left.moveTo(3, 16);
  left.lineTo(15, 3);
  left.lineTo(15, 12);
  left.bezierCurveTo(16, 12, 27, 10, 31, 21);
  left.bezierCurveTo(30, 23, 30, 26, 27, 28);
  left.bezierCurveTo(25, 20, 16, 20, 15, 20);
  left.lineTo(15, 29);
  left.lineTo(3, 16);
  left.fillStyle = '#CAF2FE';
  left.fill();
  left.stroke();
}

export function drawArrowRight(right) {
  right.beginPath();
  right.moveTo(29, 16);
  right.lineTo(17, 3);
  right.lineTo(17, 12);
  right.bezierCurveTo(16, 12, 5, 10, 1, 21);
  right.bezierCurveTo(2, 23, 2, 26, 5, 28);
  right.bezierCurveTo(7, 20, 16, 20, 17, 20);
  right.lineTo(17, 29);
  right.lineTo(29, 16);
  right.fillStyle = '#CAF2FE';
  right.fill();
  right.stroke();
}

export function goToNextLesson(storeLessonNum, storeLessonInformation) {
  if (
    storeLessonNum.circleNumber == 2 &&
    storeLessonNum.lessonNumber ==
      Object.keys(storeLessonInformation.lessons.circle2.grade9).length +
        Object.keys(storeLessonInformation.lessons.circle2.grade10).length +
        Object.keys(storeLessonInformation.lessons.circle2.grade11).length
  ) {
    storeLessonNum.circleNumber = 1;
    storeLessonNum.gradeNumber = 7;
    storeLessonNum.lessonNumber = 1;
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        Object.keys(storeLessonInformation.lessons.circle1.grade7).length ||
        storeLessonNum.lessonNumber ==
          Object.keys(storeLessonInformation.lessons.circle1.grade7).length +
            Object.keys(storeLessonInformation.lessons.circle1.grade8)
              .length)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        Object.keys(storeLessonInformation.lessons.circle2.grade9).length ||
        storeLessonNum.lessonNumber ==
          Object.keys(storeLessonInformation.lessons.circle2.grade9).length +
            Object.keys(storeLessonInformation.lessons.circle2.grade10).length))
  ) {
    storeLessonNum.gradeNumber++;
    storeLessonNum.lessonNumber++;
  } else if (
    storeLessonNum.circleNumber == 1 &&
    storeLessonNum.lessonNumber ==
      Object.keys(storeLessonInformation.lessons.circle1.grade7).length +
        Object.keys(storeLessonInformation.lessons.circle1.grade8).length +
        Object.keys(storeLessonInformation.lessons.circle1.grade9).length
  ) {
    storeLessonNum.circleNumber = 2;
    storeLessonNum.lessonNumber = 1;
  } else {
    storeLessonNum.lessonNumber++;
  }
}

export function goToPreviousLesson(storeLessonNum, storeLessonInformation) {
  if (storeLessonNum.lessonNumber == 1) {
    switch (storeLessonNum.gradeNumber) {
      case 7:
        storeLessonNum.circleNumber = 2;
        storeLessonNum.gradeNumber = 11;
        storeLessonNum.lessonNumber =
          Object.keys(storeLessonInformation.lessons.circle2.grade9).length +
          Object.keys(storeLessonInformation.lessons.circle2.grade10).length +
          Object.keys(storeLessonInformation.lessons.circle2.grade11).length;
        break;
      case 9:
        storeLessonNum.circleNumber = 1;
        storeLessonNum.lessonNumber =
          Object.keys(storeLessonInformation.lessons.circle1.grade7).length +
          Object.keys(storeLessonInformation.lessons.circle1.grade8).length +
          Object.keys(storeLessonInformation.lessons.circle1.grade9).length;
        break;
    }
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        Object.keys(storeLessonInformation.lessons.circle1.grade7).length + 1 ||
        storeLessonNum.lessonNumber ==
          Object.keys(storeLessonInformation.lessons.circle1.grade7).length +
            Object.keys(storeLessonInformation.lessons.circle1.grade8).length +
            1)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        Object.keys(storeLessonInformation.lessons.circle2.grade9).length + 1 ||
        storeLessonNum.lessonNumber ==
          Object.keys(storeLessonInformation.lessons.circle2.grade9).length +
            Object.keys(storeLessonInformation.lessons.circle2.grade10).length +
            1))
  ) {
    storeLessonNum.gradeNumber--;
    storeLessonNum.lessonNumber--;
  } else {
    storeLessonNum.lessonNumber--;
  }
}
