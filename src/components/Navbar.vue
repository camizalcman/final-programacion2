<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { UserCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/solid'

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push({ name: 'gallery' })
}
</script>

<template>
  <nav class="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 bg-accent sticky top-0 z-30">
    <RouterLink to="/" class="font-heading font-semibold text-xl text-white">
      Mundo Viajero
    </RouterLink>

    <div class="flex gap-6">
      <RouterLink
        to="/"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Destinos
      </RouterLink>

      <RouterLink
       v-if="authStore.isLoggedIn"
        to="/admin"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Admin
      </RouterLink>

      <RouterLink
        to="/research"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Investigación
      </RouterLink>

      <!-- Si NO está logueado: icono para ir a login -->
      <RouterLink
        v-if="!authStore.isLoggedIn"
        to="/login"
        class="flex items-center gap-1.5 text-text-muted hover:text-primary-dark transition-colors duration-200"
      >
        <UserCircleIcon class="w-6 h-6" />
        <span class="font-body text-sm hidden sm:inline">Ingresar</span>
      </RouterLink>

      <!-- Si está logueado -->
      <div v-else class="flex items-center gap-3">
        <span class="font-body text-sm text-text hidden sm:inline">
          {{ authStore.currentUser?.name }}
        </span>
        <button
          @click="handleLogout"
          class="cursor-pointer flex items-center gap-1 text-text-muted hover:text-danger transition-colors duration-200"
          title="Cerrar sesión"
        >
          <ArrowRightStartOnRectangleIcon class="w-5 h-5" />
        </button>
      </div>

    </div>
  </nav>
</template>