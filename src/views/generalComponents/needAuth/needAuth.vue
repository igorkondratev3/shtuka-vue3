<script setup>
  import { RouterLink } from 'vue-router';
  import { checkClose } from '@/views/generalFunctions/checkClose';

  const prop = defineProps({ allowedAction: String });
  defineEmits(['closeNeedAuth']);
</script>

<template>
  <div 
    class="need-auth"
    @click="checkClose($event) ? $emit('closeNeedAuth') : undefined"  
  >
    <div class="need-auth__content">
      <div
        class="need-auth__close-button"
        @click="$emit('closeNeedAuth')"
      >
        <span class="material-symbols-outlined"> close </span>
      </div>
      Вам необходимо
      <router-link
        to="/auth?start=login"
        class="need-auth__login"
      >
        войти</router-link
      >
      или
      <router-link
        class="need-auth__signup"
        to="/auth?start=signup"
      >
        зарегистрироваться</router-link
      >
      чтобы иметь возможность {{ prop.allowedAction }}
    </div>
  </div>
</template>

<style lang="scss">
  .need-auth {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.664);
  }
  .need-auth {
    &__content {
      font: 22px 'Times New Roman';
      color: rgb(6, 37, 63);
      text-align: justify;
      z-index: 999;
      border: 1px solid rgb(0, 0, 0);
      border-radius: 10px;
      width: 400px;
      height: 150px;
      background-color: rgb(240, 238, 238);
      padding: 30px 20px 20px 20px;
      cursor: default;
    }

    &__close-button {
      position: absolute;
      right: 0;
      top: 0;
      cursor: default;
    }
    &__close-button:hover {
      color: red;
    }
    &__login,
    &__signup {
      color: rgb(6, 37, 63);
    }
    &__login:hover,
    &__signup:hover {
      color: red;
    }
  }
</style>
