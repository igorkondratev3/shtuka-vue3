<script setup>
  import { ref } from 'vue';
  import ErrorVue from '../../generalComponents/error/errorVue.vue';
  import { fetchAuth } from './fetchAuth';
  import { authContext } from '@/stores/authContext';
  import { shtukaChannel } from '@/shtukaChannel';

  const storeAuthContext = authContext();
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const error = ref('');
  const isLoading = ref(null);

  const signup = async (email, password, repeatPassword) => {
    isLoading.value = true;

    if (password !== repeatPassword) {
      isLoading.value = false;
      error.value = 'Пароль и подтверждение не свопадают';
      return;
    }

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
  <h3 class="form-auth__title">Регистрация</h3>
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    v-model="email"
    class="form-auth__input"
  />
  <label for="password">Пароль:</label>
  <input
    type="password"
    v-model="password"
    class="form-auth__input"
    id="password"
  />
  <label for="repeat-password">Подтвердите пароль:</label>
  <input
    type="password"
    v-model="repeatPassword"
    class="form-auth__input"
    id="repeat-password"
  />
  <button
    @click.prevent="signup(email, password, repeatPassword)"
    :disabled="isLoading"
    class="form-auth__button"
    :class="{ disabled: isLoading }"
  >
    Зарегистрироваться
  </button>
  <ErrorVue
    class="form-auth__error"
    v-if="error"
    :error="error"
    @closeError="error = ''"
  />
</template>

<style></style>
