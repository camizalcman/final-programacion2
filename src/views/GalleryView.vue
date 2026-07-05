<script setup lang="ts">
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'
import DestinationCard from '@/components/DestinationCard.vue'

const contentStore = useContentStore()

onMounted(() => {
  contentStore.fetchContent()
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h1 class="font-heading text-3xl font-semibold text-text mb-8">
      Descubrí tu próximo destino
    </h1>

    <div v-if="contentStore.isLoading" class="text-center py-20 text-text-muted">
      Cargando destinos...
    </div>

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