import { defineStore } from 'pinia';

export const authContext = defineStore({
  id: 'authContext',
  state: () => ({
    user: null,
  }),
  actions: {
    login(aboutUser) {
      this.user = aboutUser;
    },
    logout() {
      this.user = null;
    },
  },
});
