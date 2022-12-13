<script setup>
  import { RouterLink } from 'vue-router';
  import { authContext } from '@/stores/authContext';
  import { deleteUserInformationFromStores } from '@/views/generalFunctions/deleteUserInformationFromStores';
  import { deleteRefreshTokenFromDB } from '@/views/generalFunctions/refreshToken';
  import { shtukaChannel } from '@/shtukaChannel';

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
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

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
