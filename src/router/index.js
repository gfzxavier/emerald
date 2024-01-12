import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      name: 'MainMenu',
      component: () => import('@/views/MainMenu.vue')
    },
    { 
      path: '/LevelOne',
      name: 'LevelOne',
      component: () => import('@/views/LevelOne.vue')
    },
  ]
})  