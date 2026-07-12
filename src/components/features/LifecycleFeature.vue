<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const counter = ref(0)
const status = ref('Esperando que el componente se monte...')

onMounted(() => {
  status.value = 'El componente fue montado correctamente'
})

onUpdated(() => {
  console.log('El componente se actualizó')
})

onUnmounted(() => {
  console.log('El componente fue eliminado')
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-heading font-semibold text-white mb-4">
      Lifecycle Hooks
    </h3>

    <p class="text-white/80 leading-relaxed mb-4">
      Los lifecycle hooks son funciones que permiten ejecutar código en momentos
      específicos del ciclo de vida de un componente Vue, como cuando se crea,
      se actualiza o se elimina.
    </p>

    <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6">
      <ul class="space-y-2 text-white/80">
        <li>
          <strong class="text-primary">onMounted()</strong>
          → Se ejecuta cuando el componente ya fue cargado en la página.
        </li>

        <li>
          <strong class="text-primary">onUpdated()</strong>
          → Se ejecuta cada vez que cambia el estado del componente.
        </li>

        <li>
          <strong class="text-primary">onUnmounted()</strong>
          → Se ejecuta cuando el componente se elimina.
        </li>

        <li>
          <strong class="text-primary">Utilidad</strong>
          → Sirven para cargar datos, iniciar eventos o limpiar recursos.
        </li>
      </ul>
    </div>

    <div class="border border-primary rounded-xl p-6">
      <h4 class="text-xl font-heading font-semibold text-white mb-4">
        Ejemplo interactivo
      </h4>

      <p class="text-white/70 mb-6">
        Cuando el componente aparece, <code class="text-primary">onMounted()</code>
        cambia automáticamente el mensaje. Cada actualización dispara
        <code class="text-primary">onUpdated()</code>.
      </p>

      <button
        @click="counter++"
        class="bg-primary text-accent px-4 py-2 rounded-lg font-medium cursor-pointer mb-4"
      >
        Actualizar componente
      </button>

      <div class="rounded-lg bg-white/10 border border-white/20 p-4 text-white">
        <p>{{ status }}</p>

        <p class="mt-2">
          Veces actualizado: {{ counter }}
        </p>
      </div>
    </div>
  </div>
</template>