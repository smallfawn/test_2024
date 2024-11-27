import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Login,
    },

    {
      path: '/home',
      name: 'home',
      component:() => import('../views/Home.vue'),
      children:[
        {
          path:'dataBoard',
          name: 'dataBoard',
          component: () => import('../views/DataBoard.vue'),
        },
        {
          path:'setting',
          name: 'setting',
          component: () => import('../views/Setting.vue'),
        },
      ]
      
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
