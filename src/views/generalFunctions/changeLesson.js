import { lessonsCollection } from '@/stores/lessonsCollection';
import { lessonNum } from '@/stores/lessonNum';

export const changeLesson = (calculateLessonNumber) => {
  const storeLessonsCollection = lessonsCollection();
  const storeLessonNum = lessonNum();

  const [circleNumber, gradeNumber, lessonNumber] = calculateLessonNumber(
    storeLessonNum,
    storeLessonsCollection.numberOf
  );
  storeLessonNum.changeLessonNumber(circleNumber, gradeNumber, lessonNumber);
};
