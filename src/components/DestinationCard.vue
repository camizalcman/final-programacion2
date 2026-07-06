//se importa la interfaz armada para tipar la prop
//este componente recibe un destino completo 

<script setup lang="ts">
    import type { Content } from '@/types/Content'

    interface Props {
        destination: Content
    }

    defineProps<Props>()
</script>

//el : indica que es dinámico, toma el valor real del objeto que le pasaron.
//el :key="tag" es obligatorio en los v-for
<template>
    <RouterLink
    :to="{ name: 'content-detail', params: { id: destination.id } }"
    class="block bg-bg-card rounded-2xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-xl"
  >
    <img
      :src="destination.coverImage"
      :alt="destination.name"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <div class="flex items-center justify-between mb-1">
        <h3 class="font-heading font-semibold text-lg text-text">
          {{ destination.name }}
        </h3>
        <span class="font-body text-sm text-secondary font-medium">
          {{ destination.rating }}
        </span>
      </div>

      <p class="font-body text-sm text-text-muted mb-2">
        {{ destination.country }}
      </p>

      <p class="font-body text-sm text-text-muted line-clamp-2">
        {{ destination.description }}
      </p>

      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in destination.tags"
          :key="tag"
          class="text-xs bg-primary/15 text-primary-dark px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>