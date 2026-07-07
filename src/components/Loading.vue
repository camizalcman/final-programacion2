<script setup lang="ts">
import { Plane, MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div class="relative w-100 h-16">
      
      <div class="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-border -translate-y-1/2"></div>

      
      <MapPin class="absolute left-0 top-1/2 -translate-y-[calc(100%+4px)] w-5 h-5 text-primary-dark" />

      
      <MapPin class="absolute right-0 top-1/2 -translate-y-[calc(100%+4px)] w-5 h-5 text-secondary" />

      
      <div class="absolute top-1/2 -translate-y-1/2 animate-fly">
        <Plane class="w-7 h-7 text-accent  drop-shadow-md" />
      </div>
    </div>

    <p class="font-body text-text-muted text-sm mt-6">
      Buscando los mejores destinos...
    </p>
  </div>
</template>