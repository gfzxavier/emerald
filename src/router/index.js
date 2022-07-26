import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/',
      name: 'MenuPrincipal',
      component: () => import('@/views/MenuPrincipal.vue')
    },
  ]
})  