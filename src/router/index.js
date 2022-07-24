import { createRouter, createWebHistory } from 'vue-router';
import LessonLayout from '@/views/lessons/lessonLayout.vue';
import LessonsList from '@/views/lessonsList/lessonsList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: () => import('@/views/startPage.vue'),
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
  ],
});

export default router;
