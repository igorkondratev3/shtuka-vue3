import { authContext } from '@/stores/authContext';
import { getNewTokens } from './refreshToken';

export const getLesson = async (circleNumber, gradeNumber, lessonNumber) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BACKEND_URI
    }/lesson/${circleNumber}/${gradeNumber}/${lessonNumber}`
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

export const getElementsFromBackend = async (
  elementsName,
  circleNumber,
  gradeNumber,
  lessonNumber
) => {
  const storeAuthContext = authContext();
  const response = await fetch(
    `${
      import.meta.env.VITE_BACKEND_URI
    }/lesson/${elementsName}/${circleNumber}/${gradeNumber}/${lessonNumber}`,
    {
      headers: {
        authorization: `Bearer ${storeAuthContext.user?.token}`,
      },
    }
  );
  const elements = await response.json();

  if (
    elements.error === 'Необходимо предоставить refreshToken' &&
    elementsName === 'additionals'
  ) {
    //временный костыль чтобы не посылать запрос токенов два раза - функция общая и вызывается одновременно для нескольких элементов
    const tokens = await getNewTokens(storeAuthContext.user?.refreshToken);
    if (tokens.error) return tokens;

    storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
    localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
    return false; //так как есть watch
  }

  if (!response.ok) {
    return false;
  }
  return elements;
};

export const deleteElementFromDB = async (
  elementsName,
  idElement,
  token,
  refreshToken
) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/lesson/${elementsName}/${idElement}/`,
    {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const payload = await response.json();

  if (payload.error === 'Необходимо предоставить refreshToken') {
    const tokens = await getNewTokens(refreshToken);
    if (tokens.error) return tokens;

    const storeAuthContext = authContext();
    storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
    localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
    await deleteElementFromDB(
      elementsName,
      idElement,
      tokens.token,
      tokens.refreshToken
    );
    return;
  }

  return payload;
};
