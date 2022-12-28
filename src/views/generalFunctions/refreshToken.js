import { authContext } from '@/stores/authContext';

export const deleteRefreshTokenFromDB = async (refreshToken) => {
  fetch(`${import.meta.env.VITE_BACKEND_URI}/refreshToken/`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${refreshToken}`,
    },
  });
};

export const getNewTokens = async (refreshToken) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/refreshToken/`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  const tokens = await response.json();
  return tokens;
};

export const updateTokens = (tokens) => {
  const storeAuthContext = authContext();
  storeAuthContext.updateTokens(tokens.token, tokens.refreshToken);
  localStorage.setItem('user', JSON.stringify(storeAuthContext.user));
}
