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

  const isPasswordEventListener = ref(false);
  const validate = () => {
    if (isPasswordEventListener.value) {
      passwordLogin.value.setCustomValidity('');
      passwordLogin.value.removeEventListener('input', validate);
      isPasswordEventListener.value = false;
    }

    if (!emailLogin.value.reportValidity()) return false;

    if (passwordLogin.value.validity.valueMissing) {
      passwordLogin.value.setCustomValidity('Заполните это поле');
      passwordLogin.value.reportValidity();
      passwordLogin.value.addEventListener('input', validate);
      isPasswordEventListener.value = true;
      return false;
    }

    if (passwordLogin.value.validity.patternMismatch) {
      passwordLogin.value.setCustomValidity('Некорректный пароль');
      passwordLogin.value.reportValidity();
      passwordLogin.value.addEventListener('input', validate);
      isPasswordEventListener.value = true;
      return false;
    }

    return true;
  };

  const login = async (email, password) => {
    if (!validate()) return;

    isLoading.value = true;

    const user = await fetchAuth('login', email, password);

    if (user.error) {
      isLoading.value = false;
      if (user.error === 'Некорректный пароль') {
        passwordLogin.value.setCustomValidity('Некорректный пароль');
        passwordLogin.value.reportValidity();
        setTimeout(() => passwordLogin.value.setCustomValidity(''), 1500);
        return;
      }
      emailLogin.value.setCustomValidity('Некорректный email');
      emailLogin.value.reportValidity();
      setTimeout(() => emailLogin.value.setCustomValidity(''), 1500);
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
    />
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
