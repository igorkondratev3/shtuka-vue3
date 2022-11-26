import { createRouter, createWebHistory } from 'vue-router';
import LessonLayout from '@/views/lessons/lessonLayout.vue';
import LessonsList from '@/views/lessonsList/lessonsList.vue';
import LoginVue from '@/views/auth/loginVue.vue';
import SignupVue from '@/views/auth/signupVue.vue';
import StartPage from '@/views/startPage/startPage.vue';
import { authContext } from '@/stores/authContext';

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
      path: '/login',
      name: 'login',
      component: LoginVue,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupVue,
    },
  ],
});

router.beforeEach((to) => {
  const storeAuthContext = authContext();
  if (to.path == '/login' && storeAuthContext.user) return '/';
  if (to.path == '/signup' && storeAuthContext.user) return '/';
});

export default router;
