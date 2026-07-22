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

    //guarda el continente actualmente filtrado, o null si no hay ningún filtro activo
    const selectedContinent = ref<string | null>(null)

    //si no hay filtro seleccionado devuelve todos los items,si hay uno, devuelve solo los que coinciden con ese continente
   const filteredItems = computed(() => {
    if (!selectedContinent.value) return items.value
    return items.value.filter((item) => item.continent === selectedContinent.value)
  })

  //saca la lista de continentes únicos que existen en los destinos cargados,usando Set (no permite duplicados) y Array.from para convertirlo de vuelta a array
  const continents = computed(() => {
    const unique = new Set(items.value.map((item) => item.continent))
    return Array.from(unique)
  })

    //si tocás el mismo continente que ya estaba activo, lo desactiva (vuelve a null, sin filtro)
  //si tocás uno distinto, lo activa como nuevo filtro
  function setContinentFilter(continent: string | null) {
    selectedContinent.value = selectedContinent.value === continent ? null : continent
  }

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

  return { items, isLoading, error, fetchContent, addContent, updateContent, deleteContent, selectedContinent, filteredItems, continents, setContinentFilter, }
})