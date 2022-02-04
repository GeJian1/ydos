import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/layout'

export const routes = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/roles',
    children: [
      {
        path: '/dashboard2',
        component: () => import('../views/dashboard/index'),
        name: 'Dashboard',
      },
      {
        path: '/roles',
        component: () => import('../views/roles/index'),
        name: 'roles',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
})

export default router
