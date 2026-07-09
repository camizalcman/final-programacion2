<script setup lang="ts">
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'
import DestinationCard from '@/components/DestinationCard.vue'
import Loading from '@/components/Loading.vue'
import Hero from '@/components/Hero.vue'

const contentStore = useContentStore()

onMounted(() => {
  contentStore.fetchContent()
})
</script>

<template>
  <Hero />
  <div class="max-w-6xl mx-auto px-6 pt-24">
    <h1 class="font-heading text-3xl font-semibold text-text mb-8">
      Descubrí tu próximo destino
    </h1>
    
    <Loading v-if="contentStore.isLoading" key="loading" />

    <div v-else-if="contentStore.error" class="text-center py-20 text-danger">
      {{ contentStore.error }}
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <DestinationCard
        v-for="item in contentStore.items"
        :key="item.id"
        :destination="item"
      />
    </div>
  </div>
</template>