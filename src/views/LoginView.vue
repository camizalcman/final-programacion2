<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function handleLogin() {
  errorMessage.value = ''

  const success = authStore.login(email.value, password.value)

  //si fue exitoso, navega a la ruta Admin
  if (success) {
    router.push({ name: 'admin' })
  } else {
    errorMessage.value = 'Email o contraseña incorrectos.'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-6 bg-bg">
    <div class="w-full max-w-4xl md:h-[70vh] h-[80vh] rounded-2xl border-2 border-primary shadow-sm overflow-hidden flex md:flex-row lg:flex-row flex-col-reverse">

      <!-- Foto -->
      <div class="w-full md:w-1/2 md:h-full h-[35%]">
        <img
          src="/images/fotoLogin.jpg"
          alt="Login"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Formulario -->
      <div class="w-full md:w-1/2 h-full flex items-center justify-center p-8 sm:p-10 bg-bg-card ">
        <form @submit.prevent="handleLogin" class="w-full max-w-sm">
          <h1 class="font-heading text-2xl font-bold text-text mb-6 md:mb-8 text-start">
            Iniciar sesión
          </h1>

          <div class="mb-4">
            <label class="block text-sm text-text-muted mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm text-text-muted mb-1">Contraseña</label>
            <input
              v-model="password"
              type="password"
              required
              class="w-full border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <p v-if="errorMessage" class="text-danger text-sm mb-4 text-center">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            class="cursor-pointer w-full rounded-full bg-primary text-accent font-medium py-2.5 transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.1 hover:shadow-sm"
          >
            Ingresar
          </button>
        </form>
      </div>

    </div>
  </div>
</template>