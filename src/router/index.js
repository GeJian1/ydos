import {createRouter,createWebHistory} from 'vue-router'
import Layout from '../components/layout'

export const routes = [
    {
        path: '/login',
        component: () => import('../views/login/index'),
    },
    {
        path: '/dashboard',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('../views/dashboard/index'),
                name: 'Dashboard',
            }
        ]
    },
    {
        path:'/',
        component: () => import('../views/login/index'),
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes:routes
})

export default router
