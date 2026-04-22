import { createRouter, createWebHistory } from 'vue-router'
// Importe as páginas DIRETAMENTE (Sem o () => import)
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import UsesView from '../views/UsesView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/resume', component: ResumeView },
    { path: '/uses', component: UsesView },
    { path: '/projects', component: ProjectsView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router