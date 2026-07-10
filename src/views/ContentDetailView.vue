<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '@/stores/content'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'
import ContentDetail from '@/components/ContentDetail.vue'


const route = useRoute()
const contentStore = useContentStore()

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
    <Loading v-if="contentStore.isLoading" key="loading" />

    <Error v-else-if="contentStore.error" key="error" :message="contentStore.error" />

    <div v-else-if="!destination" class="text-center py-20 text-text-muted">
      Destino no encontrado.
      <RouterLink to="/" class="text-primary-dark underline">Volver a la Home</RouterLink>
    </div>
    
    <ContentDetail v-else :destination="destination!"/>
  </div>
</template>

// .find puede devolver undefined
// El ! le indica a TS que destination existe, ya que se comprobo previamente