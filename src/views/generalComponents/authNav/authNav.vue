<script setup>
  import { RouterLink } from 'vue-router';
  import { authContext } from '@/stores/authContext.js';
  import { deleteUserInformationFromStores } from '@/views/generalFunctions/deleteUserInformationFromStores.js';
  import { deleteRefreshTokenFromDB } from '@/views/generalFunctions/refreshToken.js';
  import { shtukaChannel } from '@/shtukaChannel.js';

  const storeAuthContext = authContext();

  const logout = async () => {
    await deleteRefreshTokenFromDB(storeAuthContext.user?.refreshToken);
    localStorage.removeItem('user');
    deleteUserInformationFromStores();
    shtukaChannel.postMessage('logout');
  };
</script>

<template>
  <nav class="nav-auth">
    <button
      class="nav-auth__logout"
      v-show="storeAuthContext.user"
      @click="logout"
    >
      Выйти
    </button>
    <div v-show="!storeAuthContext.user">
      <router-link
        to="/auth?start=login"
        class="nav-auth__login"
      >
        Вход
      </router-link>
      /
      <router-link
        class="nav-auth__signup"
        to="/auth?start=signup"
      >
        Регистрация
      </router-link>
    </div>
  </nav>
</template>

<style>
  @font-face {
    font-family: "Pacifico";
    src: url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }

  .nav-auth__logout {
    background-color: transparent;
    color: #333;
    border: 0;
    cursor: pointer;
    font-family: 'Pacifico', cursive;
    font-size: 16px;
  }

  .nav-auth__login,
  .nav-auth__signup {
    color: #333;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    font-family: 'Pacifico', cursive;
    font-size: 16px;
  }

  .nav-auth__login:hover,
  .nav-auth__signup:hover,
  .nav-auth__logout:hover {
    color: red;
  }
</style>
