<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ErrorVue from '../../generalComponents/error/errorVue.vue';
  import { fetchAuth } from './fetchAuth'

  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const error = ref('');
  const isLoading = ref(null);

  const signup = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      isLoading.value = false;
      error.value = 'Пароль и подтверждение не свопадают';
      return;
    }
    
    fetchAuth('signup', email, password, error, isLoading, router);
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
      @closeError="error=''"
    />
</template>

<style>
</style>
