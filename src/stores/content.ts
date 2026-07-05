import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getContent } from '@/services/ContentServices'
import type { Content } from '@/types/Content'

//'content' es el ID único de este store dentro de la app
export const useContentStore = defineStore('content', () => {
  //un array reactivo, que arranca vacío [], y va a contener los destinos una vez cargados. El <Content[]> le dice a TypeScript qué tipo de datos va a tener adentro.
  const items = ref<Content[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchContent() {
    isLoading.value = true
    error.value = null

    try {
      items.value = await getContent()
    } catch {
      error.value = 'No se pudo cargar el contenido. Intentá nuevamente.'
    } finally {
      isLoading.value = false
    }
  }

  return { items, isLoading, error, fetchContent }
})
