import { createRouter, createWebHistory } from 'vue-router'
import GalleryView from '@/views/GalleryView.vue'
import ContentDetailView from '@/views/ContentDetailView.vue'
import AdminView from '@/views/AdminView.vue'
import ResearchView from '@/views/ResearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'gallery', component: GalleryView },
    { path: '/content/:id', name: 'content-detail', component: ContentDetailView },
    { path: '/admin', name: 'admin', component: AdminView },
    { path: '/research', name: 'research', component: ResearchView },
  ],
})

export default router