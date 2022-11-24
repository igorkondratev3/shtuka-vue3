export const goToChoosenLesson = (
  circleNumber,
  gradeNumber,
  lessonNumber,
  storeLessonNum,
  router
) => {
  storeLessonNum.changeLessonNumber(circleNumber, gradeNumber, lessonNumber);
  router.push({ path: '/lessonLayout' }); //делаем программно, чтобы при переключении на страницу урок уже был записан
}
