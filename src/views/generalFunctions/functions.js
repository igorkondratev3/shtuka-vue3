export function changeColor(elem) {
  elem.addEventListener('pointerover', function () {
    elem.style.backgroundColor = '#C5C8CB';
  });
  elem.addEventListener('pointerout', function () {
    elem.style.backgroundColor = 'transparent';
  });
  elem.addEventListener('pointerdown', function () {
    elem.style.backgroundColor = '#8795A5';
  });
  elem.addEventListener('pointerup', function () {
    elem.style.backgroundColor = '#C5C8CB';
  });
}

export async function getLesson(circleNum, gradeNum, lessonNum) {
  const response = await fetch(
    `http://localhost:4000/lesson/${circleNum}/${gradeNum}/${lessonNum}`
  );
  const lesson = await response.json();
  if (!response.ok) {
    return false;
  }
  return lesson;
}

export async function getLessons(circleNum, gradeNum) {
  const response = await fetch(
    `http://localhost:4000/lesson/${circleNum}/${gradeNum}`
  );
  const lesson = await response.json();
  if (!response.ok) {
    return false;
  }
  return lesson;
}

export async function goToChoosenLesson(
  circleNumber,
  gradeNumber,
  lessonNumber,
  storeLessonNum,
  router
) {
  changeLessonNumber(circleNumber, gradeNumber, lessonNumber, storeLessonNum);
  router.push({ path: '/lessonLayout' }); //делаем программно, чтобы при переключении на страницу урок уже был записан
}

function isThereLesson(
  circleNumber,
  gradeNumber,
  lessonNumber,
  storeLessonsCollection
) {
  if (
    storeLessonsCollection.lessons[`circle${circleNumber}`][
      `grade${gradeNumber}`
    ][`lesson${lessonNumber}`]
  ) {
    return true;
  } else {
    return false;
  }
}

function changeLessonNumber(
  circleNumber,
  gradeNumber,
  lessonNumber,
  storeLessonNum
) {
  storeLessonNum.circleNumber = circleNumber;
  storeLessonNum.gradeNumber = gradeNumber;
  storeLessonNum.lessonNumber = lessonNumber;
}

export function drawPlus(plus) {
  plus.beginPath();
  plus.lineWidth = 0.5;
  plus.moveTo(13, 5);
  plus.lineTo(21, 5);
  plus.lineTo(21, 12);
  plus.lineTo(29, 12);
  plus.lineTo(29, 19);
  plus.lineTo(21, 19);
  plus.lineTo(21, 26);
  plus.lineTo(13, 26);
  plus.lineTo(13, 19);
  plus.lineTo(5, 19);
  plus.lineTo(5, 12);
  plus.lineTo(13, 12);
  plus.lineTo(13, 5);
  plus.strokeStyle = 'black';
  plus.fillStyle = '#CAF2FE';
  plus.fill();
  plus.stroke();
}

export function changeLessonNumberForNextLesson(
  storeLessonNum,
  storeLessonsCollection
) {
  if (
    storeLessonNum.circleNumber == 2 &&
    storeLessonNum.lessonNumber ==
      storeLessonsCollection.numberOfCircle2Grade9Lessons +
        storeLessonsCollection.numberOfGrade10Lessons +
        storeLessonsCollection.numberOfGrade11Lessons
  ) {
    return [1, 7, 1];
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOfGrade7Lessons ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOfGrade7Lessons +
            storeLessonsCollection.numberOfGrade8Lessons)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOfCircle2Grade9Lessons ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOfCircle2Grade9Lessons +
            storeLessonsCollection.numberOfGrade10Lessons))
  ) {
    return [
      storeLessonNum.circleNumber,
      storeLessonNum.gradeNumber + 1,
      storeLessonNum.lessonNumber + 1,
    ];
  } else if (
    storeLessonNum.circleNumber == 1 &&
    storeLessonNum.lessonNumber ==
      storeLessonsCollection.numberOfGrade7Lessons +
        storeLessonsCollection.numberOfGrade8Lessons +
        storeLessonsCollection.numberOfCircle1Grade9Lessons
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

export function changeLessonNumberForPreviousLesson(
  storeLessonNum,
  storeLessonsCollection
) {
  if (storeLessonNum.lessonNumber == 1) {
    switch (storeLessonNum.gradeNumber) {
      case 7:
        return [
          2,
          11,
          storeLessonsCollection.numberOfCircle2Grade9Lessons +
            storeLessonsCollection.numberOfGrade10Lessons +
            storeLessonsCollection.numberOfGrade11Lessons,
        ];
      case 9:
        return [
          1,
          storeLessonNum.gradeNumber,
          storeLessonsCollection.numberOfCircle1Grade9Lessons +
            storeLessonsCollection.numberOfGrade7Lessons +
            storeLessonsCollection.numberOfGrade8Lessons,
        ];
    }
  } else if (
    (storeLessonNum.circleNumber == 1 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOfGrade7Lessons + 1 ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOfGrade7Lessons +
            storeLessonsCollection.numberOfGrade8Lessons +
            1)) ||
    (storeLessonNum.circleNumber == 2 &&
      (storeLessonNum.lessonNumber ==
        storeLessonsCollection.numberOfCircle2Grade9Lessons + 1 ||
        storeLessonNum.lessonNumber ==
          storeLessonsCollection.numberOfCircle2Grade9Lessons +
            storeLessonsCollection.numberOfGrade10Lessons +
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
