<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ShieldExclamationIcon } from '@heroicons/vue/24/solid'

const authStore = useAuthStore()
</script>

<template>
  <div class="min-h-[70vh] flex items-center justify-center px-6">

    <!--Si el usuario logueado no es admin, muestra el mensaje de acceso restringido-->
    <div v-if="!authStore.isAdmin" class="text-center max-w-md">
      <div class="bg-danger/10 rounded-full p-4 w-fit mx-auto mb-4">
        <ShieldExclamationIcon class="w-10 h-10 text-danger" />
      </div>
      <h1 class="font-heading text-2xl font-semibold text-text mb-2">
        Acceso restringido
      </h1>
      <p class="font-body text-text-muted">
        Esta pantalla es de acceso restringido
      </p>
    </div>

    <div v-else class="w-full">
      <h1 class="font-heading text-2xl font-semibold text-text">
        Panel de Administración
      </h1>
      <p class="text-text-muted mt-2">
        Bienvenido, {{ authStore.currentUser?.name }}
      </p>
    </div>
  </div>
</template>