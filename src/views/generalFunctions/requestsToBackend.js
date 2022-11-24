export const getLesson = async(circleNumber, gradeNumber, lessonNumber) => {
  const response = await fetch(
    `http://localhost:4000/lesson/${circleNumber}/${gradeNumber}/${lessonNumber}`
  );
  const lesson = await response.json();
  if (!response.ok) {
    return false;
  }
  return lesson;
}

export const getLessons = async(circleNumber, gradeNumber) => {
  const response = await fetch(
    `http://localhost:4000/lesson/${circleNumber}/${gradeNumber}`
  );
  const lesson = await response.json();
  if (!response.ok) {
    return false;
  }
  return lesson;
}