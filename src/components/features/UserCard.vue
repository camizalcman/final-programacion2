<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/solid'
defineProps<{
  nombre: string
  edad: number
}>()
</script>

<template>
  <div class="rounded-xl bg-white/5 p-5 border border-primary">

    <h5 class="text-primary font-semibold mb-4">
      Componente Hijo
    </h5>

    <div class="rounded-lg bg-white/10 p-5">

      <div class="text-5xl mb-3">
        <UserIcon class="w-12 h-12 text-primary" />
      </div>

      <p class="text-white">
        <strong>Nombre:</strong> {{ nombre }}
      </p>

      <p class="text-white mt-2">
        <strong>Edad:</strong> {{ edad }}
      </p>

    </div>

  </div>
</template>