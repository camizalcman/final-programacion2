<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
</script>

<template>
  <div>
    <h3 class="text-2xl font-heading font-semibold text-white mb-4">
      Directivas
    </h3>

    <p class="text-white/80 leading-relaxed mb-4">
      Son atributos especiales que comienzan con
      <code class="text-primary">v-</code> y permiten agregar comportamiento al HTML.
      Algunas de las más utilizadas son:
    </p>

    <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6">
      <ul class="space-y-2 text-white/80">
        <li>
          <strong class="text-primary">v-if</strong>
          → Muestra u oculta un elemento según una condición.
        </li>

        <li>
          <strong class="text-primary">v-for</strong>
          → Recorre un arreglo y genera elementos automáticamente.
        </li>

        <li>
          <strong class="text-primary">v-model</strong>
          → Sincroniza un dato con un input.
        </li>

        <li>
          <strong class="text-primary">v-bind ( : )</strong>
          → Permite enlazar atributos dinámicamente.
        </li>
      </ul>
    </div>

    <div class="border border-primary rounded-xl p-6">
      <h4 class="text-xl font-heading font-semibold text-white mb-4">
        Ejemplo interactivo
      </h4>

      <p class="text-white/70 mb-6">
        Este botón utiliza <code class="text-primary">v-if</code> para mostrar y ocultar un elemento.
      </p>

      <button
        @click="visible = !visible"
        class="bg-primary text-accent px-4 py-2 rounded-lg font-medium cursor-pointer mb-4"
      >
        {{ visible ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
      </button>

      <div
        v-if="visible"
        class="rounded-lg bg-white/10 border border-white/20 p-4 text-white"
      >
        ¡Este elemento existe gracias a <strong>v-if</strong>!
      </div>
    </div>
  </div>
</template>