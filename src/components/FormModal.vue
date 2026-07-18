<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Content } from '@/types/Content'
import { XMarkIcon } from '@heroicons/vue/24/solid'

interface Props {
  isOpen: boolean
  editingItem: Content | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  save: [data: Omit<Content, 'id' | 'createdAt'>] //estos campos no ser crean ni se editan
}>()

const form = ref({
  name: '',
  country: '',
  continent: '',
  description: '',
  coverImage: '',
  rating: 0,
  climate: '',
  bestSeasonToVisit: '',
})

//watch ejecuta codigo cada vez que algo cambia, sin devolver nada
watch(
  () => props.editingItem, //que observar

  //que hacer cuando cambia
  (item) => {
    if (item) {
      form.value = {
        name: item.name,
        country: item.country,
        continent: item.continent,
        description: item.description,
        coverImage: item.coverImage,
        rating: item.rating,
        climate: item.climate,
        bestSeasonToVisit: item.bestSeasonToVisit,
      }
    } else {
      form.value = {
        name: '',
        country: '',
        continent: '',
        description: '',
        coverImage: '',
        rating: 0,
        climate: '',
        bestSeasonToVisit: '',
      }
    }
  },

  //ejecuta la función inmediatamente al crear el componente, no solo cuando cambie después.
  { immediate: true }

  //si le paso un editingItem, el form se precarga con esos datos para editarlo. Si editingItems es null, el form arranca vacio para crear algo
)


function handleSubmit() {
  emit('save', {
    ...form.value,
    images: props.editingItem?.images ?? [],
    tags: props.editingItem?.tags ?? [],
    location: props.editingItem?.location ?? { lat: 0, lng: 0 },
  })
  //arma el objeto con los datos del formulario y se lo pasa al AdminView.vue

}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      @click.self="emit('close')"
    >
    <!-- .self hace que el evento se dispare cuando clickeas exactamente ese elemento -->

      <!-- Modal -->  
      <div class="bg-bg-card rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6">
        <div class="flex items-center justify-between mb-5">
          <h2 class="font-heading text-xl font-semibold text-text">
            {{ editingItem ? 'Editar destino' : 'Nuevo destino' }}
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

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm text-text-muted mb-1">País</label>
              <input v-model="form.country" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm text-text-muted mb-1">Continente</label>
              <input v-model="form.continent" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>

          <div>
            <label class="block text-sm text-text-muted mb-1">Descripción</label>
            <textarea v-model="form.description" required rows="3" class="w-full border border-border rounded-lg px-3 py-2 text-sm"></textarea>
          </div>

          <div>
            <label class="block text-sm text-text-muted mb-1">Imagen (URL)</label>
            <input v-model="form.coverImage" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block text-sm text-text-muted mb-1">Rating</label>
              <input v-model.number="form.rating" type="number" step="0.1" min="0" max="5" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm text-text-muted mb-1">Clima</label>
              <input v-model="form.climate" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm text-text-muted mb-1">Temporada</label>
              <input v-model="form.bestSeasonToVisit" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
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