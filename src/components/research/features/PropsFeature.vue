<script setup lang="ts">
import { ref } from 'vue'
import UserCard from './UserCard.vue'

const nombre = ref('')
const edad = ref(0)
</script>

<template>
  <div>
    <h3 class="text-2xl font-heading font-semibold text-white mb-4">
      Comunicación entre componentes
    </h3>

    <p class="text-white/80 leading-relaxed mb-4">
      Las <strong>props</strong> permiten que un componente padre envíe datos a un componente hijo.
      Es la forma principal de comunicación entre componentes.
    </p>

    <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6">
      <ul class="space-y-2 text-white/80">
        <li>
          <strong class="text-primary">Props</strong>
          Envían datos del padre al hijo.
        </li>

        <li>
          <strong class="text-primary">Emit</strong>
          Permite que el hijo envíe eventos al padre.
        </li>
      </ul>
    </div>

    <div class="border border-primary rounded-xl p-6">

      <h4 class="text-xl font-heading font-semibold text-white mb-5">
        Ejemplo interactivo
      </h4>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Padre -->

        <div class="rounded-xl bg-white/5 p-5 border border-white/10">

          <h5 class="text-primary font-semibold mb-4">
            Componente Padre
          </h5>

          <label class="block text-white/70 text-sm mb-2">
            Nombre
          </label>

          <input
            v-model="nombre"
            class="w-full mb-4 rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white outline-none focus:border-primary"
          />

          <label class="block text-white/70 text-sm mb-2">
            Edad
          </label>

          <input
            type="number"
            v-model="edad"
            class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white outline-none focus:border-primary"
          />

        </div>

        <!-- Hijo -->

        <UserCard
          :nombre="nombre"
          :edad="edad"
        />

      </div>

    </div>
  </div>
</template>