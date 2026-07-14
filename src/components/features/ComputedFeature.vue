<script setup lang="ts">
import { ref, computed } from 'vue'

const name = ref('')
const quantity = ref(0)

const message = computed(() => {
  if (!name.value) {
    return 'Esperando un nombre...'
  }

  return `Hola ${name.value}, agregaste ${quantity.value} producto(s).`
})

const total = computed(() => {
  return quantity.value * 1500
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-heading font-semibold text-white mb-4">
      Propiedades computadas
    </h3>

    <p class="text-white/80 leading-relaxed mb-4">
      Son valores que se calculan a partir de otros
      datos reactivos. Vue guarda el resultado y solo lo vuelve a calcular cuando
      sus dependencias cambian.
    </p>

    <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6">
      <ul class="space-y-2 text-white/80">
        <li>
          <strong class="text-primary">computed()</strong>
          → Crea un valor derivado de otros datos reactivos.
        </li>

        <li>
          <strong class="text-primary">Optimización</strong>
          → Guarda el resultado hasta que cambian sus dependencias.
        </li>

        <li>
          <strong class="text-primary">Automático</strong>
          → Se actualiza cuando los datos usados dentro cambian.
        </li>

        <li>
          <strong class="text-primary">Solo lectura</strong>
          → Normalmente se utiliza para mostrar información calculada.
        </li>
      </ul>
    </div>

    <div class="border border-primary rounded-xl p-6">
      <h4 class="text-xl font-heading font-semibold text-white mb-4">
        Ejemplo interactivo
      </h4>

      <p class="text-white/70 mb-6">
        En este ejemplo, <code class="text-primary">computed</code> calcula un
        mensaje y un precio total usando otros valores reactivos.
      </p>

      <div class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Escribí tu nombre"
          class="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50"
        />

        <div class="flex items-center gap-4">
          <button
            @click="quantity++"
            class="bg-primary text-accent px-4 py-2 rounded-lg font-medium cursor-pointer"
          >
            Agregar producto
          </button>

          <span class="text-white">
            Cantidad: {{ quantity }}
          </span>
        </div>

        <div class="rounded-lg bg-white/10 border border-white/20 p-4 text-white">
          <p>
            {{ message }}
          </p>

          <p class="mt-2">
            Total: ${{ total }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>