<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'

interface Props {
  message?: string
}

withDefaults(defineProps<Props>(), {
  message: 'Ocurrió un problema. Intentá nuevamente.',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center py-24 text-center">
    <div class="bg-danger/10 rounded-full p-4 mb-4">
      <AlertTriangle class="w-8 h-8 text-danger" />
    </div>
    <p class="font-body text-text-muted text-sm max-w-xs">
      {{ message }}
    </p>
  </div>
</template>