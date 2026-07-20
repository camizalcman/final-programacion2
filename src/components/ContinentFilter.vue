<script setup lang="ts">
import { useContentStore } from '@/stores/content'
import { TrashIcon } from '@heroicons/vue/24/outline'


const contentStore = useContentStore()

const continentImages: Record<string, string> = {
  'Asia': '/continents/asia.png',
  'Europa': '/continents/europa.png',
  'América del Sur': '/continents/americaSur.png',
    'América del Norte': '/continents/americaNorte.png',
  'África': '/continents/africa.png',
  'Oceanía': '/continents/oceania.png',
}
console.log(contentStore.continents)
</script>

<template>
  <div class="flex justify-end mb-4">
    <button
      v-if="contentStore.selectedContinent"
      @click="contentStore.setContinentFilter(null)"
      class="flex items-center gap-2 text-sm text-text-muted hover:text-primary-dark transition-colors cursor-pointer"
    >
      <TrashIcon class="w-4 h-4" />
      Limpiar filtros
    </button>
  </div>

  <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 mb-12">
    <button
      v-for="continent in contentStore.continents"
      :key="continent"
      @click="contentStore.setContinentFilter(continent)"
      class="cursor-pointer shrink-0 flex flex-col items-center group"
    >
      <img
        :src="continentImages[continent]"
        :alt="continent"
        class="w-24 h-24 sm:w-40 sm:h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        :class="contentStore.selectedContinent === continent ? 'scale-110' : ''"
      />
      <span
        class="font-body text-md transition-colors duration-200"
        :class="contentStore.selectedContinent === continent
          ? 'text-primary-dark font-bold'
          : 'text-text-muted group-hover:text-text font-medium'"
      >
        {{ continent }}
      </span>
    </button>
  </div>
</template>