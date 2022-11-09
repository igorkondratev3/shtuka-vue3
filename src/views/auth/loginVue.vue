<script setup>
  import { ref } from 'vue';
  import { useRouter, RouterLink } from 'vue-router';
  import { authContext } from '@/stores/authContext';
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';

  const router = useRouter();
  const storeAuthContext = authContext();
  const email = ref('');
  const password = ref('');
  const error = ref(null);
  const isLoading = ref(null);

  async function handleLogin() {
    await login(email.value, password.value);
  }

  async function login(email, password) {
    isLoading.value = true;
    error.value = null;

    const response = await fetch('http://localhost:4000/user/login', {
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
  }
</script>

<template>
  <header class="header"><AppMenu /></header>
  <form class="form-auth login">
    <h3 class="form-auth__title">Вход</h3>
    <label>Email:</label>
    <input
      class="form-auth__input"
      type="email"
      v-model="email"
    />
    <label>Пароль:</label>
    <input
      class="form-auth__input"
      type="password"
      v-model="password"
    />
    <button
      class="form-auth__button"
      :disabled="isLoading"
      @click.prevent="handleLogin()"
    >
      Войти
    </button>
    <div
      class="form-auth__error error"
      v-show="error"
    >
      {{ error }}
    </div>
    <router-link
      class="nav-auth__signup form-auth__link"
      to="/signup"
    >
      Регистрация
    </router-link>
  </form>
</template>

<style>
  @import './formAuth.css';
  @import '@/assets/error.css';

  .form-auth__link {
    top: 20px;
  }
</style>
