import { authContext } from '@/stores/authContext';

export const fetchAuth = async (action, email, password, error, isLoading, router) => {  
  isLoading.value = true;

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/user/${action}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const payload = await response.json();

  if (!response.ok) {
    isLoading.value = false;
    error.value = payload.error;
  }

  if (response.ok) {
    const storeAuthContext = authContext();
    localStorage.setItem('user', JSON.stringify(payload));
    storeAuthContext.login(payload);
    isLoading.value = false;
    if (window.history.state.back) {
      window.history.back();
    } else {
      router.push({ path: '/' });
    }
  }
};