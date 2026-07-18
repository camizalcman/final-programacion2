<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useContentStore } from '@/stores/content'
import { useUsersStore } from '@/stores/users'
import { ShieldExclamationIcon, MapIcon, UsersIcon, PencilIcon, TrashIcon, PlusIcon, } from '@heroicons/vue/24/solid'
import FormModal from '@/components/FormModal.vue'
import type { Content } from '@/types/Content'
import feedback from '@/components/Feedback.vue'

const authStore = useAuthStore()
const contentStore = useContentStore()
const usersStore = useUsersStore()

const activeTab = ref<'content' | 'users'>('content')

onMounted(() => {
  if (contentStore.items.length === 0) {
    contentStore.fetchContent()
  }
})

// Modal
const isContentModalOpen = ref(false)
const editingContentItem = ref<Content | null>(null)

//para identificar que tipo de modal es
function openCreateContentModal() {
  editingContentItem.value = null
  isContentModalOpen.value = true
}

function openEditContentModal(item: Content) {
  editingContentItem.value = item
  isContentModalOpen.value = true
}

//Si editingContentItem.value tiene algo llama updateContent
function handleSaveContent(data: Omit<Content, 'id' | 'createdAt'>) {
  if (editingContentItem.value) {
    contentStore.updateContent(editingContentItem.value.id, data)
    triggerToast('Destino actualizado con éxito')
  } else {
    contentStore.addContent({
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    })
    triggerToast('Destino creado con éxito')
  }
  isContentModalOpen.value = false
}

function handleDeleteContent(id: number) {
  if (confirm('¿Estás segura de que querés borrar este destino?')) {
    contentStore.deleteContent(id)
    triggerToast('Destino eliminado')
  }
}

const toastMessage = ref('')
const showToast = ref(false)

function triggerToast(message: string) {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2500)
}


</script>

<template>
  <div class="min-h-[70vh]">
    <div v-if="!authStore.isAdmin" class="flex items-center justify-center min-h-[70vh] px-6">
      <div class="text-center max-w-md">
        <div class="bg-danger/10 rounded-full p-4 w-fit mx-auto mb-4">
          <ShieldExclamationIcon class="w-10 h-10 text-danger" />
        </div>
        <h1 class="font-heading text-2xl font-semibold text-text mb-2">
          Acceso restringido
        </h1>
        <p class="font-body text-text-muted">
          Esta pantalla es de acceso restringido a administradores.
          Necesitás loguearte con una cuenta que tenga permisos de admin.
        </p>
      </div>
    </div>

    <div v-else class="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
      <h1 class="font-heading text-2xl sm:text-3xl font-semibold text-text mb-1">
        Panel de Administración
      </h1>
      <p class="text-text-muted mb-8">
        Bienvenido, {{ authStore.currentUser?.name }}
      </p>

      <div class="flex gap-2 border-b border-border mb-6">
        <button
          @click="activeTab = 'content'"
          class="cursor-pointer flex items-center gap-2 px-4 py-3 font-body font-medium text-sm border-b-2 transition-colors duration-200"
          :class="activeTab === 'content' ? 'border-primary text-primary-dark' : 'border-transparent text-text-muted hover:text-text'"
        >
          <MapIcon class="w-4 h-4" />
          Contenido
        </button>

        <button
          @click="activeTab = 'users'"
          class="cursor-pointer flex items-center gap-2 px-4 py-3 font-body font-medium text-sm border-b-2 transition-colors duration-200"
          :class="activeTab === 'users' ? 'border-primary text-primary-dark' : 'border-transparent text-text-muted hover:text-text'"
        >
          <UsersIcon class="w-4 h-4" />
          Usuarios
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'content'" key="content">
          <div class="flex items-center justify-between mb-4">
            <p class="text-text-muted text-sm">{{ contentStore.items.length }} destinos</p>
            <button
              @click="openCreateContentModal"
              class="cursor-pointer flex items-center gap-2 bg-primary text-accent text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              <PlusIcon class="w-4 h-4" />
              Nuevo destino
            </button>
          </div>

          <div class="bg-bg-card rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-bg border-b border-border">
                <tr class="text-left text-text-muted">
                  <th class="px-4 py-3 font-medium">Destino</th>
                  <th class="px-4 py-3 font-medium">País</th>
                  <th class="px-4 py-3 font-medium">Rating</th>
                  <th class="px-4 py-3 font-medium text-right">Acciones</th>
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
                  <td class="px-4 py-3">
                    <div class="flex justify-end gap-2">
                      <button
                        @click="openEditContentModal(item)"
                        class="cursor-pointer text-text-muted hover:text-primary-dark p-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                        title="Editar"
                      >
                        <PencilIcon class="w-4 h-4" />
                      </button>
                      <button
                        @click="handleDeleteContent(item.id)"
                        class="cursor-pointer text-text-muted hover:text-danger p-1.5 rounded-lg hover:bg-danger/10 transition-colors"
                        title="Borrar"
                      >
                        <TrashIcon class="w-4 h-4" />
                      </button>
                    </div>
                  </td>
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

    <FormModal
      :is-open="isContentModalOpen"
      :editing-item="editingContentItem"
      @close="isContentModalOpen = false"
      @save="handleSaveContent"
    />
    <Toast :message="toastMessage" :show="showToast" />

  </div>
</template>