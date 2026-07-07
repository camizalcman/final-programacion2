//se importa la interfaz armada para tipar la prop
//este componente recibe un destino completo 

<script setup lang="ts">
    import type { Content } from '@/types/Content'
    import { MapPinIcon, StarIcon } from '@heroicons/vue/24/solid'


    interface Props {
        destination: Content
    }

    defineProps<Props>()
</script>

//el : indica que es dinámico, toma el valor real del objeto que le pasaron.
<template>
  <RouterLink
    :to="{ name: 'content-detail', params: { id: destination.id } }"
    class="relative block h-80 rounded-2xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-xl"
  >
    <img
      :src="destination.coverImage"
      :alt="destination.name"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

    <!-- rating: arriba a la izquierda -->
    <span
      class="absolute top-3 right-3 bg-white/85 backdrop-blur-sm text-secondary font-body font-semibold text-xs px-2.5 py-1 rounded-full flex gap-1 items-center"
    >
       {{ destination.rating }}<StarIcon class="w-3 h-3 fill-secondary text-secondary" />
    </span>

    <!-- nombre + ubicacion: abajo a la izquierda -->
    <div class="absolute bottom-4 left-4 right-4">
      <h3 class="font-heading font-bold text-white text-3xl leading-tight drop-shadow-sm">
         {{ destination.name }}
      </h3>
      <p class="font-body text-white/85 text-sm mt-1 flex gap-1">
        <MapPinIcon class="w-4 h-4 text-primary" />{{ destination.country }}, {{ destination.continent }}
      </p>
    </div>
  </RouterLink>
</template>