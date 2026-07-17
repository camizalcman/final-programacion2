import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getContent } from '@/services/ContentServices'
import type { Content } from '@/types/Content'
import { AdminRequest } from '@/utils/AdminRequest'

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

  //se crea una instancia con method POST
 function addContent(newItem: Content) {
    const req = new AdminRequest('POST', '/api/content', newItem)
    req.log()

    items.value.push(newItem)
  }

  //se crea una instancia con method PUT
  //Partial<Content> es un "utility type" de TypeScript. Significa: todas las propiedades de Content, pero todas opcionales
  function updateContent(id: number, updatedData: Partial<Content>) {
    const req = new AdminRequest('PUT', `/api/content/${id}`, updatedData)
    req.log()

    const index = items.value.findIndex((item) => item.id === id)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updatedData } as Content
    }
    //crea un objeto nuevo, combinando todas las propiedades del ítem viejo con las propiedades nuevas 
    //as Content le dice a TS que el resultado es un Content válido
  }

  //se crea una instancia con method DELETE
  function deleteContent(id: number) {
    const req = new AdminRequest('DELETE', `/api/content/${id}`, null)
    req.log()

    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items, isLoading, error, fetchContent, addContent, updateContent, deleteContent }
})