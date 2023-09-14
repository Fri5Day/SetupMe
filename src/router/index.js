// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/MontagemProfissional',
        name: 'ProfessionalAssembly',
        component: () => import('@/views/ProfessionalAssembly.vue'),
      },
      {
        path: '/MontagemGamer',
        name: 'GamerAssembly',
        component: () => import('@/views/GamerAssembly.vue'),
      },
      {
        path: '/Simulador',
        name: 'Simulator',
        component: () => import('@/views/Simulator.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(), // Usando createWebHashHistory em vez de createWebHistory
  routes,
})

export default router
