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

    const payloadResponse = await fetchAuth('login', email, password);

    if (payloadResponse.error) {
      isLoading.value = false;
      error.value = payloadResponse.error;
      return;
    }

    localStorage.setItem('user', JSON.stringify(payloadResponse));
    storeAuthContext.login(payloadResponse);
    isLoading.value = false;
    shtukaChannel.postMessage('login');
  };
</script>

<template>
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
