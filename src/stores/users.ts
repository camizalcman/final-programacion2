import { defineStore } from 'pinia'
import { ref } from 'vue'
import usersData from '@/data/users.json'
import type { User } from '@/types/User'

export const useUsersStore = defineStore('users', () => {
  const items = ref<User[]>([...(usersData as User[])])

  //para que cualquier componente pueda leerlo como userStre.items
  return { items }
})

//Se crea para que cualquier parte del Admin trabaje siempre sobre los mismos datos actualizados