<script setup lang="ts">
import { ref, watch } from 'vue'
import type { User } from '@/types/User'
import { XMarkIcon } from '@heroicons/vue/24/solid'

interface Props {
  isOpen: boolean
  editingItem: User | null
}

const props = defineProps<Props>()

//emit hacia AdminView.
// emit de save excluye registerDate y likedPostIDs porque esos campos no se completan en el form
const emit = defineEmits<{
  close: []
  save: [data: Omit<User, 'registerDate' | 'likedPostIDs'>]
}>()

const form = ref({
  name: '',
  email: '',
  password: '',
  isSubscribed: false,
  isAdmin: false,
})

//si editingItem tiene datos precarga el form (modo edicion), sin datos lo resetea (modo creacion)
//immediate:true para que corra tambien al montar el componente, no solo ante cambios posteriores
watch(
  () => props.editingItem,
  (item) => {
    if (item) {
      form.value = {
        name: item.name,
        email: item.email,
        password: item.password,
        isSubscribed: item.isSubscribed,
        isAdmin: item.isAdmin,
      }
    } else {
      form.value = {
        name: '',
        email: '',
        password: '',
        isSubscribed: false,
        isAdmin: false,
      }
    }
  },
  { immediate: true }
)

function handleSubmit() {
  emit('save', { ...form.value })
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      @click.self="emit('close')"
    >
      <div class="bg-bg-card rounded-2xl shadow-xl w-full max-w-md p-6">
        <div class="flex items-center justify-between mb-5">
          <h2 class="font-heading text-xl font-semibold text-text">
            {{ editingItem ? 'Editar usuario' : 'Nuevo usuario' }}
          </h2>
          <button @click="emit('close')" class="cursor-pointer text-text-muted hover:text-text">
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm text-text-muted mb-1">Nombre</label>
            <input v-model="form.name" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
          </div>

          <div>
            <label class="block text-sm text-text-muted mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              :disabled="!!editingItem"
              class="w-full border border-border rounded-lg px-3 py-2 text-sm disabled:bg-bg disabled:text-text-muted"
            />
          </div>

          <div>
            <label class="block text-sm text-text-muted mb-1">Contraseña</label>
            <input v-model="form.password" type="text" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
          </div>

          <div class="flex gap-6">
            <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
              <input v-model="form.isSubscribed" type="checkbox" class="rounded border-border" />
              Suscripto
            </label>
            <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
              <input v-model="form.isAdmin" type="checkbox" class="rounded border-border" />
              Es admin
            </label>
          </div>

          <div class="flex gap-3 pt-2">
            <button
              type="button"
              @click="emit('close')"
              class="cursor-pointer flex-1 rounded-full border border-border text-text-muted py-2.5 font-medium hover:bg-bg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="cursor-pointer flex-1 rounded-full bg-primary text-accent py-2.5 font-medium hover:bg-primary-dark transition-colors"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template> 