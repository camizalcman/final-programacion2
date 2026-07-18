<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

interface Props {
  message: string
  show: boolean
}

defineProps<Props>()
</script>

<template>
  <Transition name="toast">
    <div
      v-if="show"
      class="fixed bottom-6 right-6 bg-accent text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 z-50"
    >
      <CheckCircleIcon class="w-5 h-5 text-primary" />
      <span class="font-body text-sm">{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>