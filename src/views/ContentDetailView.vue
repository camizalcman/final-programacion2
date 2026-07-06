<script setup lang="ts">
import { computed, onMounted } from 'vue'

//hook que da acceso a la información de la URL actual
import { useRoute } from 'vue-router'
import { useContentStore } from '@/stores/content'

const route = useRoute()
const contentStore = useContentStore()

//se crea un valor derivado del estado del store. Cada vez que cambien contentStore.items o route.params.id, este valor se recalcula solo
const destination = computed(() =>
  contentStore.items.find((item) => item.id === Number(route.params.id))
)

onMounted(() => {
  if (contentStore.items.length === 0) {
    contentStore.fetchContent()
  }
})
</script>


<template>
  <div>
    <div v-if="contentStore.isLoading" class="text-center py-20 text-text-muted">
      Cargando destino...
    </div>

    <div v-else-if="!destination" class="text-center py-20 text-text-muted">
      Destino no encontrado.
      <RouterLink to="/" class="text-primary-dark underline">Volver a la galería</RouterLink>
    </div>

    <div v-else class="pb-24">
      <!-- HERO: imagen a pantalla completa -->
      <div class="relative h-screen w-full overflow-hidden">
        <img
          :src="destination.coverImage"
          :alt="destination.name"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

        <RouterLink
          to="/"
          class="absolute top-6 left-6 flex items-center gap-2 text-white font-body text-sm hover:opacity-80 transition-opacity z-10"
        >
          ← Volver a destinos
        </RouterLink>

        <h1 class="absolute bottom-24 left-8 font-heading text-9xl font-semibold text-white z-10">
          {{ destination.name }}
        </h1>
      </div>

      <!-- INFO: tarjeta superpuesta sobre el borde inferior del hero -->
      <div class="relative z-20 -mt-16 px-6 sm:px-12">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8">
            <div class="flex items-center gap-3 mb-2">
              <span class="font-body text-secondary font-medium">⭐ {{ destination.rating }}</span>
              <span class="text-text-muted">·</span>
              <span class="text-text-muted">{{ destination.country }} · {{ destination.continent }}</span>
            </div>

            <p class="font-body text-text leading-relaxed mb-6">
              {{ destination.description }}
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/60 rounded-xl p-4">
                <p class="text-xs text-text-muted mb-1">Clima</p>
                <p class="font-medium text-text">{{ destination.climate }}</p>
              </div>
              <div class="bg-white/60 rounded-xl p-4">
                <p class="text-xs text-text-muted mb-1">Mejor época</p>
                <p class="font-medium text-text">{{ destination.bestSeasonToVisit }}</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in destination.tags"
                :key="tag"
                class="text-sm bg-primary/15 text-primary-dark px-3 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8 content-start">
            <div
              v-for="(img, index) in destination.images"
              :key="index"
              class="bg-white p-3 pb-12 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.20)] transition-transform duration-300 hover:rotate-0 hover:scale-105"
              :class="index % 2 === 0 ? '-rotate-3' : 'rotate-3'"
            >
              <img
                :src="img"
                :alt="`${destination.name} ${index + 1}`"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>