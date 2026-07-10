//me traigo la data del json y la interfaz armada
import contentData from '@/data/content.json'
import type { Content } from '@/types/Content'

//función asincrónica, lo que la función devuelva queda envuelto en una Promise
//: Promise<Content[]>  esta función, cuando se resuelva, va a entregar un array de objetos Content
//as Content[] es un type assertion 

export async function getContent(): Promise<Content[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return contentData as Content[]
}