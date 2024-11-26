import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
    },
    /*{
      path: '/AdminLogin',
      name: '管理员登录',
      component: () => import('../views/AdminLogin.vue'),
    },
    {
      path: '/UserLogin',
      name: '用户登录',

      component: () => import('../views/UserLogin.vue'),
    },*/
  ],
})

export default router
