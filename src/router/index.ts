import { createRouter, createWebHistory } from 'vue-router'
import GalleryView from '@/views/GalleryView.vue'
import ContentDetailView from '@/views/ContentDetailView.vue'
import AdminView from '@/views/AdminView.vue'
import ResearchView from '@/views/ResearchView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'



//se definen las rutas
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return {
      top: 0
    }
  },

  routes: [
    { path: '/', name: 'gallery', component: GalleryView },
    { path: '/content/:id', name: 'content-detail', component: ContentDetailView },
    { path: '/admin', name: 'admin', component: AdminView, meta: { requiresAdmin: true } },
    { path: '/research', name: 'research', component: ResearchView },
    { path: '/login', name: 'login', component: LoginView },
  ],

})

// función especial de Vue Router que se ejecuta automáticamente, antes de cada cambio de página, en toda la aplicación sin tener que llamarla manualmente y evita que un usuario no logueado ingrese a admin
//recibe un parámetro to, que es un objeto con toda la información de la ruta a la que el usuario está intentando ir 
router.beforeEach((to) => {
  //para consultar si el usuario esta logueado
  const authStore = useAuthStore()

  //si la ruta destino es /admin y el usuario no esta logueado
  if (to.meta.requiresAdmin && !authStore.isLoggedIn) {
    return { name: 'login' }
  }
})



export default router