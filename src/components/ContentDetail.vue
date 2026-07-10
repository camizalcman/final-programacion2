<script setup lang="ts">
import type { Content } from '@/types/Content'
import { MapPinIcon, StarIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'

defineProps<{
  destination: Content
}>()
</script>

<template>
    <div>
      <div class="relative h-[40vh] sm:h-[55vh] lg:h-[65vh] w-full overflow-hidden">
        <img
          :src="destination.coverImage"
          :alt="destination.name"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      
      <div class="relative z-20 -mt-36 sm:-mt-48 lg:-mt-70 px-6 sm:px-8 lg:px-12 pb-6 lg:pb-2">
        <div class="max-w-6xl mx-auto">
          <!-- título -->
          <div class="flex flex-col mb-4">
            <RouterLink
              to="/"
              class="inline-flex items-center gap-2 text-white font-body text-sm hover:opacity-80 transition-opacity w-fit mb-2"
            >
             <ChevronLeftIcon class="w-4 h-4" />Volver a destinos
            </RouterLink>

            <h1 class="font-heading font-semibold text-white text-5xl sm:text-6xl lg:text-8xl leading-none">
              {{ destination.name }}
            </h1>
          </div>

          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-5 sm:p-6 lg:p-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary font-body font-semibold text-xs px-2.5 py-1 rounded-full flex gap-1 items-center">{{ destination.rating }}<StarIcon class="w-3 h-3 fill-secondary text-secondary" /></span>

                <span class="text-text-muted text-sm sm:text-base flex gap-1 items-center">
                  <MapPinIcon class="w-5 h-5 text-accent" /> {{ destination.country }}, {{ destination.continent }}
                </span>
              </div>

              <p class="font-body text-text leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base">
                {{ destination.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in destination.tags"
                  :key="tag"
                  class="text-xs sm:text-sm bg-accent/15 text-accent px-2.5 sm:px-3 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-2">
                <div class="bg-primary/20 border-1 border-primary rounded-xl p-3 sm:p-3">
                  <p class="text-xs text-text-muted mb-1">Clima</p>
                  <p class="font-medium text-text text-sm sm:text-lg">{{ destination.climate }}</p>
                </div>
                <div class="bg-primary/20 border-1 border-primary rounded-xl p-3 sm:p-3">
                  <p class="text-xs text-text-muted mb-1">Mejor época</p>
                  <p class="font-medium text-text text-sm sm:text-lg">{{ destination.bestSeasonToVisit }}</p>
                </div>
              </div>

            </div>

            <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 content-start">
              <div
                v-for="(img, index) in destination.images"
                :key="index"
                class="bg-white p-2 sm:p-3 pb-8 sm:pb-8 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.20)] transition-transform duration-300 hover:rotate-0 hover:scale-105"
                :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
              >
                <img
                  :src="img"
                  :alt="`${destination.name} ${index + 1}`"
                  class="w-full h-28 sm:h-40 lg:h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>