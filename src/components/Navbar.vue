<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { UserIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/solid'
import ConfirmModal from '@/components/ConfirmModal.vue'

const router = useRouter()
const authStore = useAuthStore()

const isLogoutModalOpen = ref(false)

function askLogout() {
  isLogoutModalOpen.value = true
}

function confirmLogout() {
  authStore.logout()
  isLogoutModalOpen.value = false
  router.push({ name: 'gallery' })
}
</script>

<template>
  <nav class="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 bg-accent sticky top-0 z-30">

    <div class="flex justify-center items-center gap-2">
      <img
        src="/images/hero/miRumbo.png"
        alt="logo"
        width="40"
        height="40"
      />

      <RouterLink to="/" class="font-heading font-bold text-lg sm:text-xl text-white">
        Mi rumbo
      </RouterLink>
    </div>

    <div class="flex gap-4 sm:gap-6 items-center">
      <RouterLink
        to="/"
        class="text-sm sm:text-base font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="font-bold text-primary-dark"
      >
        Destinos
      </RouterLink>

      <RouterLink
        v-if="authStore.isLoggedIn"
        to="/admin"
        class="text-sm sm:text-base font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="font-bold text-primary-dark"
      >
        Admin
      </RouterLink>

      <RouterLink
        to="/research"
        class="text-sm sm:text-base font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="font-bold text-primary-dark"
      >
        Investigación
      </RouterLink>
    </div>

    <div>
      <!-- Si NO está logueado: icono para ir a login -->
      <RouterLink
        v-if="!authStore.isLoggedIn"
        to="/login"
        class="cursor-pointer flex items-center gap-1.5 font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
      >
        <UserIcon class="w-5 h-5" />
        <span class="font-body text-sm hidden sm:inline">Ingresar</span>
      </RouterLink>

      <!-- Si está logueado -->
      <div v-else class="flex items-center gap-3">
        <span class="font-body text-sm text-text hidden sm:inline">
          {{ authStore.currentUser?.name }}
        </span>
        <button
          @click="askLogout"
          class="cursor-pointer flex items-center gap-1.5 text-white/80 hover:text-danger transition-colors duration-200"
          title="Cerrar sesión"
        >
          <ArrowRightStartOnRectangleIcon class="w-5 h-5" />
          <span class="font-body text-sm hidden sm:inline">Salir</span>
        </button>
      </div>
    </div>

    <ConfirmModal
      :is-open="isLogoutModalOpen"
      title="Cerrar sesión"
      message="¿Estás segura de que querés cerrar tu sesión?"
      confirm-text="Sí, cerrar sesión"
      @confirm="confirmLogout"
      @cancel="isLogoutModalOpen = false"
    />

  </nav>
</template>