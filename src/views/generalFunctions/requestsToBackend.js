import { authContext } from '@/stores/authContext.js';
import { getNewTokens, updateTokens } from './refreshToken.js';

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
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URI
      }/lesson/${circleNumber}/${gradeNumber}`
    );
    const lessons = await response.json();
    return lessons;
  } catch (error) {
    return { error: 'Ошибка доступа к серверу' };
  }
};

let fetchRefreshToken = false;

export const getElementsFromBackend = async (
  elementsName,
  circleNumber,
  gradeNumber,
  lessonNumber
) => {
  const storeAuthContext = authContext();
  let response;
  try {
    response = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URI
      }/lesson/${elementsName}/${circleNumber}/${gradeNumber}/${lessonNumber}`,
      {
        headers: {
          authorization: `Bearer ${storeAuthContext.user?.token}`,
        },
      }
    );
  } catch {
    return { error: 'Ошибка доступа к серверу' };
  }

  const elements = await response.json();

  if (elements.error === 'Необходимо предоставить refreshToken') {
    if (!fetchRefreshToken) {
      fetchRefreshToken = true;
      //чтобы не посылать запрос токенов два раза - функция общая и вызывается одновременно для нескольких элементов
      const tokens = await getNewTokens(storeAuthContext.user?.refreshToken);
      if (tokens.error) return tokens;
      updateTokens(tokens);
    } else fetchRefreshToken = false;
    return; //так как есть watch, который вызовет функцию
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
  let payload = await response.json();

  if (payload.error === 'Необходимо предоставить refreshToken') {
    const tokens = await getNewTokens(refreshToken);
    if (tokens.error) return tokens;
    updateTokens(tokens);
    payload = await deleteElementFromDB(
      elementsName,
      idElement,
      tokens.token,
      tokens.refreshToken
    );
  }

  return payload;
};
