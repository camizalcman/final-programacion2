<script setup lang="ts">
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'

interface Props {
  isOpen: boolean
  title: string
  message: string
  confirmText?: string
  cancelText?: string
}

withDefaults(defineProps<Props>(), {
  confirmText: 'Confirmar',
  cancelText: 'Cancelar',
})

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] px-4"
      @click.self="emit('cancel')"
    >
      <div class="bg-bg-card rounded-2xl shadow-xl w-full max-w-sm p-6 text-center">
        <div class="bg-danger/10 rounded-full p-3 w-fit mx-auto mb-4">
          <ExclamationTriangleIcon class="w-7 h-7 text-danger" />
        </div>

        <h3 class="font-heading text-lg font-semibold text-text mb-2">
          {{ title }}
        </h3>

        <p class="font-body text-text-muted text-sm mb-6">
          {{ message }}
        </p>

        <div class="flex gap-3">
          <button
            @click="emit('cancel')"
            class="cursor-pointer flex-1 rounded-full border border-border text-text-muted py-2.5 font-medium text-sm hover:bg-bg transition-colors"
          >
            {{ cancelText }}
          </button>
          <button
            @click="emit('confirm')"
            class="cursor-pointer flex-1 rounded-full bg-danger text-white py-2.5 font-medium text-sm hover:bg-red-700 transition-colors"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>