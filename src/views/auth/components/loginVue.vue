<script setup>
  import { ref } from 'vue';
  import { fetchAuth } from './fetchAuth';
  import { authContext } from '@/stores/authContext';
  import { shtukaChannel } from '@/shtukaChannel';

  const storeAuthContext = authContext();
  const email = ref('');
  const password = ref('');
  const isLoading = ref(null);
  const formLogin = ref(null);
  const emailLogin = ref(null);
  const passwordLogin = ref(null);

  const login = async (email, password) => {

    if (passwordLogin.value.validity.patternMismatch) {
      passwordLogin.value.setCustomValidity("Некорректный пароль");
      passwordLogin.value.reportValidity();
      setTimeout(() => passwordLogin.value.setCustomValidity(""), 1000);
      return;
    }

    if (!emailLogin.value.reportValidity()) return;

    isLoading.value = true;

    const user = await fetchAuth('login', email, password);

    if (user.error) {
      isLoading.value = false;
      if (user.error === 'Некорректный пароль') {
        passwordLogin.value.setCustomValidity("Некорректный пароль");
        passwordLogin.value.reportValidity();
        setTimeout(() => passwordLogin.value.setCustomValidity(""), 1000);
        return;
      }
      emailLogin.value.setCustomValidity("Некорректный email");
      emailLogin.value.reportValidity();
      setTimeout(() => emailLogin.value.setCustomValidity(""), 1000);
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    storeAuthContext.login(user);
    isLoading.value = false;
    shtukaChannel.postMessage('login');
  };
</script>

<template>
  <h3 class="auth__title">Вход</h3>
  <form 
    ref="formLogin"
    class="auth__form form-auth"
    > 
    <label for="email">Email:</label>
    <input
      class="form-auth__input"
      id="email"
      type="email"
      ref="emailLogin"
      v-model="email"
      maxlength="40"
      required
    >
    <label for="password">Пароль:</label>
    <input
      class="form-auth__input"
      id="password"
      type="password"
      ref="passwordLogin"
      v-model="password"
      maxlength="80"
      pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
      required
    />
    <button
      class="form-auth__button"
      :class="{ disabled: isLoading }"
      :disabled="isLoading"
      @click.prevent="login(email, password)"
    >
      Войти
    </button>
  </form>
</template>

<style></style>
