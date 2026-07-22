import { defineStore } from 'pinia'
import { ref } from 'vue'
import usersData from '@/data/users.json'
import type { User } from '@/types/User'
import { AdminRequest } from '@/utils/AdminRequest'

export const useUsersStore = defineStore('users', () => {

  //se crea una copia editable del array del JSON, en vez de usar la referencia original importada 
  const items = ref<User[]>([...(usersData as User[])])

  //se crea una instancia con method POST
  function addUser(newUser: User) {
    const req = new AdminRequest('POST', '/api/users', newUser)
    req.log()

    items.value.push(newUser)
  }

   //se crea una instancia con method PUT
  //se usa el email como identificador único, ya que User no tiene un campo id
  function updateUser(email: string, updatedData: Partial<User>) {
    const req = new AdminRequest('PUT', `/api/users/${email}`, updatedData)
    req.log()

    const index = items.value.findIndex((u) => u.email === email)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updatedData } as User
    }
  }

  //se crea una instancia con method DELETE
  function deleteUser(email: string) {
    const req = new AdminRequest('DELETE', `/api/users/${email}`, null)
    req.log()

    items.value = items.value.filter((u) => u.email !== email)
  }

  //para que cualquier componente pueda leerlo como userStre.items
  return { items, addUser, updateUser, deleteUser }
})

//Se crea para que cualquier parte del Admin trabaje siempre sobre los mismos datos actualizados