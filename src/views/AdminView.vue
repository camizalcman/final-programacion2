<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useContentStore } from '@/stores/content'
import { useUsersStore } from '@/stores/users'
import { ShieldExclamationIcon, MapIcon, UsersIcon } from '@heroicons/vue/24/solid'

const authStore = useAuthStore()
const contentStore = useContentStore()
const usersStore = useUsersStore()

const activeTab = ref<'content' | 'users'>('content')

onMounted(() => {
  if (contentStore.items.length === 0) {
    contentStore.fetchContent()
  }
})

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

    <!-- Panel de administracion -->
    <div v-else class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
      <h1 class="font-heading text-2xl sm:text-3xl font-semibold text-text mb-1">
        Panel de Administración
      </h1>
      <p class="text-text-muted mb-8">
        Bienvenido, {{ authStore.currentUser?.name }}
      </p>

      <!-- Tabs -->
      <div class="flex gap-2 border-b border-border mb-6">
        <button
          @click="activeTab = 'content'"
          class="cursor-pointer flex items-center gap-2 px-4 py-3 font-body font-medium text-sm border-b-2 transition-colors duration-200"
          :class="activeTab === 'content'
            ? 'border-primary text-primary-dark'
            : 'border-transparent text-text-muted hover:text-text'"
        >
          <MapIcon class="w-4 h-4" />
          Contenido
        </button>

        <button
          @click="activeTab = 'users'"
          class="cursor-pointer flex items-center gap-2 px-4 py-3 font-body font-medium text-sm border-b-2 transition-colors duration-200"
          :class="activeTab === 'users'
            ? 'border-primary text-primary-dark'
            : 'border-transparent text-text-muted hover:text-text'"
        >
          <UsersIcon class="w-4 h-4" />
          Usuarios
        </button>
      </div>

      <!-- Contenido de cada tab -->
      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'content'" key="content">
          <p class="text-text-muted text-sm mb-4">{{ contentStore.items.length }} destinos</p>

          <div class="bg-bg-card rounded-2xl shadow-sm overflow-hidden">
            <table class="w-full text-sm">
              <thead class="bg-bg border-b border-border">
                <tr class="text-left text-text-muted">
                  <th class="px-4 py-3 font-medium">Destino</th>
                  <th class="px-4 py-3 font-medium">País</th>
                  <th class="px-4 py-3 font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in contentStore.items"
                  :key="item.id"
                  class="border-b border-border last:border-0 hover:bg-bg/50"
                >
                  <td class="px-4 py-3 text-text font-medium">{{ item.name }}</td>
                  <td class="px-4 py-3 text-text-muted">{{ item.country }}</td>
                  <td class="px-4 py-3 text-text-muted">⭐ {{ item.rating }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else key="users">
          <p class="text-text-muted text-sm mb-4">{{ usersStore.items.length }} usuarios</p>

          <div class="bg-bg-card rounded-2xl shadow-sm overflow-hidden">
            <table class="w-full text-sm">
              <thead class="bg-bg border-b border-border">
                <tr class="text-left text-text-muted">
                  <th class="px-4 py-3 font-medium">Nombre</th>
                  <th class="px-4 py-3 font-medium">Email</th>
                  <th class="px-4 py-3 font-medium">Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="user in usersStore.items"
                  :key="user.email"
                  class="border-b border-border last:border-0 hover:bg-bg/50"
                >
                  <td class="px-4 py-3 text-text font-medium">{{ user.name }}</td>
                  <td class="px-4 py-3 text-text-muted">{{ user.email }}</td>
                  <td class="px-4 py-3">
                    <span v-if="user.isAdmin" class="text-primary-dark font-medium">Sí</span>
                    <span v-else class="text-text-muted">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>