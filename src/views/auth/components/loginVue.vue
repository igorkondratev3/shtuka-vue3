<script setup>
  import { ref } from 'vue';
  import ErrorVue from '@/views/generalComponents/error/errorVue.vue';
  import { fetchAuth } from './fetchAuth';
  import { authContext } from '@/stores/authContext';
  import { shtukaChannel } from '@/shtukaChannel';

  const storeAuthContext = authContext();
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const isLoading = ref(null);

  const login = async (email, password) => {
    isLoading.value = true;

    const user = await fetchAuth('login', email, password);

    if (user.error) {
      isLoading.value = false;
      error.value = user.error;
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    storeAuthContext.login(user);
    isLoading.value = false;
    shtukaChannel.postMessage('login');
  };
</script>

<template>
  <h3 class="form-auth__title">Вход</h3>
  <label for="email">Email:</label>
  <input
    class="form-auth__input"
    id="email"
    type="email"
    v-model="email"
  />
  <label for="password">Пароль:</label>
  <input
    class="form-auth__input"
    id="password"
    type="password"
    v-model="password"
  />
  <button
    class="form-auth__button"
    :class="{ disabled: isLoading }"
    :disabled="isLoading"
    @click.prevent="login(email, password)"
  >
    Войти
  </button>
  <ErrorVue
    class="form-auth__error"
    v-if="error"
    :error="error"
    @closeError="error = ''"
  />
</template>

<style></style>
