import { createRouter, createWebHistory } from 'vue-router'
import SharePage from '@/views/SharePage.vue'
import SharingEfficiencyPage from '@/views/SharingEfficiencyPage.vue'

const routes = [
  { path: '/share', component: SharePage },
  { path: '/sharing-efficiencyPage', component: SharingEfficiencyPage },
  { path: '/', redirect: '/chia-se' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
