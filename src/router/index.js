// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
