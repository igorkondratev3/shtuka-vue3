<script setup>
  import { ref } from 'vue';
  import { useRouter, RouterLink } from 'vue-router';
  import { authContext } from '@/stores/authContext';
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';

  const router = useRouter();
  const storeAuthContext = authContext();
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const error = ref(null);
  const isLoading = ref(null);

  const signup = async (email, password, repeatPassword) => {
    isLoading.value = true;
    error.value = null;

    if (password !== repeatPassword) {
      isLoading.value = false;
      error.value = 'Пароль и подтверждение не свопадают';
      return;
    }

    const response = await fetch('http://localhost:4000/user/signup', {
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
</script>

<template>
  <header class="header"><AppMenu /></header>
  <form class="form-auth signup">
    <h3 class="form-auth__title">Регистрация</h3>
    <label>Email:</label>
    <input
      type="email"
      v-model="email"
      class="form-auth__input"
    />
    <label>Пароль:</label>
    <input
      type="password"
      v-model="password"
      class="form-auth__input"
    />
    <label>Подтвердите пароль:</label>
    <input
      type="password"
      v-model="repeatPassword"
      class="form-auth__input"
    />
    <button
      @click.prevent="signup(email, password, repeatPassword)"
      :disabled="isLoading"
      class="form-auth__button"
    >
      Зарегистрироваться
    </button>
    <div
      class="form__error error"
      v-show="error"
    >
      {{ error }}
    </div>
    <router-link
      class="nav-auth__signup form-auth__link"
      to="/login"
    >
      Вход
    </router-link>
  </form>
</template>

<style></style>
