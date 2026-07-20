<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Content } from '@/types/Content'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { useContentStore } from '@/stores/content'

const contentStore = useContentStore()

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

// campos que no son inputs directos del form (son arrays), se manejan como texto separado por comas
const tagsInput = ref('')
const imagesInput = ref('')

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
      // precarga los arrays como texto separado por comas, para poder editarlos en un input simple
      tagsInput.value = item.tags.join(', ')
      imagesInput.value = item.images.join(', ')
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
      tagsInput.value = ''
      imagesInput.value = ''
    }
  },

  //ejecuta la función inmediatamente al crear el componente, no solo cuando cambie después.
  { immediate: true }

  //si le paso un editingItem, el form se precarga con esos datos para editarlo. Si editingItems es null, el form arranca vacio para crear algo
)

// convierte "playa, cultura" en ["playa", "cultura"], sacando espacios y strings vacíos
function parseCommaList(value: string): string[] {
  return value
    .split(',')
    .map((v) => v.trim())
    .filter((v) => v.length > 0)
}

function handleSubmit() {
  emit('save', {
    ...form.value,
    tags: parseCommaList(tagsInput.value),
    images: parseCommaList(imagesInput.value),
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
      <div class="bg-bg-card rounded-2xl shadow-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6">
        <div class="flex items-center justify-between mb-5">
          <h2 class="font-heading text-xl font-bold text-text">
            {{ editingItem ? 'Editar destino' : 'Nuevo destino' }}
          </h2>
          <button @click="emit('close')" class="cursor-pointer text-text-muted hover:text-text">
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">

          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block text-sm text-text-muted mb-1">Nombre</label>
              <input v-model="form.name" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm text-text-muted mb-1">País</label>
              <input v-model="form.country" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label class="block text-sm text-text-muted mb-1">Continente</label>
              <select v-model="form.continent" required class="w-full border border-border rounded-lg px-3 py-2 text-sm bg-white">
                <option value="" disabled>Seleccionar</option>
                <option v-for="c in contentStore.continents" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
          </div>

                    <div>
            <label class="block text-sm text-text-muted mb-1">Imagen de portada (URL)</label>
            <input v-model="form.coverImage" required class="w-full border border-border rounded-lg px-3 py-2 text-sm" />
          </div>

          <div>
            <label class="block text-sm text-text-muted mb-1">Tags (separados por coma)</label>
            <input
              v-model="tagsInput"
              placeholder="Ejemplo: playa, cultura, naturaleza"
              class="w-full border border-border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm text-text-muted mb-1">Descripción</label>
              <textarea v-model="form.description" required rows="3" class="w-full border border-border rounded-lg px-3 py-2 text-sm"></textarea>
            </div>

            <div>
              <label class="block text-sm text-text-muted mb-1">Imágenes adicionales (URLs separadas por coma)</label>
              <textarea
                v-model="imagesInput"
                rows="3"
                class="w-full border border-border rounded-lg px-3 py-2 text-sm"
               ></textarea>
            </div>

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
              <label class="block text-sm text-text-muted mb-1">Mejor temporada</label>
              <select v-model="form.bestSeasonToVisit" required class="w-full border border-border rounded-lg px-3 py-2 text-sm bg-white">
                <option value="" disabled>Seleccionar</option>
                <option value="Primavera">Primavera</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
              </select>
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button
              type="button"
              @click="emit('close')"
              class="cursor-pointer flex-1 rounded-full border border-border text-text-muted py-2 font-medium hover:bg-bg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="cursor-pointer flex-1 rounded-full bg-primary text-accent py-2 font-medium hover:bg-primary-dark transition-colors"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>