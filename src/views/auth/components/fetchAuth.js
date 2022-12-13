export const fetchAuth = async (action, email, password) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URI}/user/${action}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
  );

  const payload = await response.json();
  return payload;
};
