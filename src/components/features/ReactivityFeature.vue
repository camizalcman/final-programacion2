<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref('')
</script>

<template>
  <div>
    <h3 class="text-2xl font-heading font-semibold text-white mb-4">
      Reactividad
    </h3>

    <p class="text-white/80 leading-relaxed mb-4">
      Es el mecanismo por el cual, al cambiar un dato,
      todo lo que depende de ese dato en la interfaz se actualiza automáticamente.Vue utiliza internamente <strong>Proxy</strong>, para "vigilar" las variables reactivas.
    </p>

    <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6">

      <ul class="space-y-2 text-white/80">
        <li>
          <strong class="text-primary">ref()</strong>
          → Para un valor individual (número, texto o booleano). En el
          <strong>script</strong> se accede mediante
          <code class="text-primary">.value</code>.
        </li>

        <li>
          <strong class="text-primary">reactive()</strong>
          → Para que un objeto completo sea reactivo.
          Sus propiedades pueden accederse directamente.
        </li>
      </ul>
    </div>

    <!-- Ejemplo interactivo -->

    <div class="border border-primary rounded-xl p-6">
      <h4 class="text-xl font-semibold text-white mb-4 font-heading">
        Ejemplo interactivo
      </h4>

      <p class="text-white/70 mb-6">
        Escribí un nombre y observá cómo la interfaz se actualiza
        automáticamente sin manipular el DOM.
      </p>

        <div>
          <label class="block text-white/70 mb-2">
            Nombre
          </label>

          <input
            v-model="nombre"
            type="text"
            placeholder="Escribí tu nombre..."
            class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none focus:border-primary"
          />

          <p class="text-white mt-3">
            Hola
            <span class="text-primary font-semibold">
              {{ nombre || "..." }}
            </span>
          </p>
        </div>

    </div>
  </div>
</template>