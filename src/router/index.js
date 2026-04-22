import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/resume', component: () => import('../views/ResumeView.vue') },
    { path: '/uses', component: () => import('../views/UsesView.vue') },
    { path: '/projects', component: () => import('../views/ProjectsView.vue') },
  ]
})

export default router