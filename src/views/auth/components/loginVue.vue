<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ErrorVue from '../../generalComponents/error/errorVue.vue';
  import { fetchAuth } from './fetchAuth'
  
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const isLoading = ref(null);

  const login = (email, password) => {
    fetchAuth('login', email, password, error, isLoading, router);
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
      @closeError="error=''"
    />
</template>

<style></style>
