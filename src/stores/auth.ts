import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import usersData from '@/data/users.json'
import type { User } from '@/types/User'

export const useAuthStore = defineStore('auth', () => {
    //guarda el usuario logueado actualmente o null si nadie esta logueado
    const currentUser = ref<User | null>(null)

  const isLoggedIn = computed(() => currentUser.value !== null)

  //true si el usuario tiene isAdmin:true
  const isAdmin = computed(() => currentUser.value?.isAdmin ?? false)

  //son cumputed porque se recalculan solos cada vez que el currentUser cambia

  //busca dentro del array uno que tenga ese mail y contraseña
  //si lo encuentra lo guarda como currentUser y devuelve true
  function login(email: string, password: string): boolean {
    const found = (usersData as User[]).find(
      (u) => u.email === email && u.password === password
    )

    if (found) {
      currentUser.value = found
      return true
    }

    return false
  }

  //resetea el currentUser
  //los componentes que reaccionan a isLoggedIn o isAdmin reaccionan solos
  function logout() {
    currentUser.value = null
  }

  return { currentUser, isLoggedIn, isAdmin, login, logout }
})