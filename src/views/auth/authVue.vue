<script setup>
  import { ref } from 'vue';
  import AppMenu from '@/views/generalComponents/menu/appMenu.vue';
  import LoginVue from './components/loginVue.vue';
  import SignupVue from './components/signupVue.vue';

  const isSignup = ref(false);
  const urlSearchParams = new URLSearchParams(document.location.search);
  if (urlSearchParams.get('start') === 'signup') {
    isSignup.value = true;
  } 
  
</script>

<template>
  <header class="header"><AppMenu /></header>
  <form class="form-auth signup">
    <component :is="isSignup ? SignupVue : LoginVue"></component>
    <a
      class="nav-auth__signup form-auth__link"
      v-show="isSignup"
      @click="isSignup=false"
    >
      Вход
    </a>
    <a
      class="nav-auth__signup form-auth__link"
      v-show="!isSignup"
      @click="isSignup=true"
    >
      Регистрация
    </a>
  </form>
</template>

<style>
  @import './formAuth.css';
</style>