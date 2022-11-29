import { authContext } from '@/stores/authContext';

export const getLesson = async (circleNumber, gradeNumber, lessonNumber) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/lesson/${circleNumber}/${gradeNumber}/${lessonNumber}`
  );
  const lesson = await response.json();
  if (!response.ok) {
    return false;
  }
  return lesson;
};

export const getLessons = async (circleNumber, gradeNumber) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/lesson/${circleNumber}/${gradeNumber}`
  );
  const lessons = await response.json();
  if (!response.ok) {
    return false;
  }
  return lessons;
};

export const getElementsFromBackend = async (elementsName, circleNumber, gradeNumber, lessonNumber) => {
  const storeAuthContext = authContext();
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/lesson/${elementsName}/${circleNumber}/${gradeNumber}/${lessonNumber}`,
    {
      headers: {
        authorization: `Bearer ${storeAuthContext.user?.token}`,
      },
    }
  );
  const elements = await response.json();
  if (!response.ok) {
    return false;
  }
  return elements;
}
