import { createRouter, createWebHistory } from 'vue-router';
import LessonLayout from '@/views/lessons/lessonLayout.vue';
import LessonsList from '@/views/lessonsList/lessonsList.vue';
import AuthVue from '@/views/auth/authVue.vue';
import StartPage from '@/views/startPage/startPage.vue';
import { authContext } from '@/stores/authContext.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
      //component: () => import('@/views/startPage/startPage.vue'),
    },
    {
      path: '/lessonLayout',
      name: 'LessonLayout',
      component: LessonLayout,
    },
    {
      path: '/lessonsList',
      name: 'LessonsList',
      component: LessonsList,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthVue,
    },
  ],
});

router.beforeEach((to) => {
  const storeAuthContext = authContext();
  if (to.path == '/auth' && storeAuthContext.user) return '/';
});

export default router;
