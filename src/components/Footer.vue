<script setup lang="ts">
import { Plane } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-accent text-white px-6 md:px-12 lg:px-24">
    <div class="mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <div class="flex items-center gap-2 font-heading font-semibold text-xl mb-2">
          <Plane class="w-5 h-5" />
          Mundo Viajero
        </div>
        <p class="text-white/70 text-sm">
          Descubrí destinos increíbles y planificá tu próxima aventura.
        </p>
      </div>

      <ul class="flex gap-6 text-sm text-white/80">
        <li><RouterLink to="/" class="hover:text-white transition-colors">Destinos</RouterLink></li>
        <li><RouterLink to="/admin" class="hover:text-white transition-colors">Admin</RouterLink></li>
        <li><RouterLink to="/research" class="hover:text-white transition-colors">Investigación</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>