import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      name: 'MainMenu',
      component: () => import('@/views/MainMenu.vue')
    },
  ]
})  