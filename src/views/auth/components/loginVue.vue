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
