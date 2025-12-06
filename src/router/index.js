import { createRouter, createWebHistory } from 'vue-router'
import SharePage from '@/views/SharePage.vue'
import SharingEfficiencyPage from '@/views/SharingEfficiencyPage.vue'
import OrderLandingPage from '@/views/OrderLandingPage.vue'
import SuccessLink from '@/views/SuccessLink.vue'

const routes = [
  { path: '/share', component: SharePage },
  { path: '/sharing-efficiencyPage', component: SharingEfficiencyPage },
  { path: '/', redirect: '/share' },
  {
    path: '/landing-page-don-hang', // Đây là link trên trình duyệt
    name: 'OrderLandingPage',
    component: OrderLandingPage,
    meta: { layout: 'empty' }, // (Tùy chọn) Nếu bạn có layout Admin, dùng cái này để ẩn Sidebar đi
  },
  // Success Link
  { path: '/success', component: SuccessLink },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
