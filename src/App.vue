<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>


<template>
    <div class="p-8 flex gap-4">
    <BaseButton variant="primary" @click="() => alert('primary')">Primario</BaseButton>
    <BaseButton variant="secondary">Secundario</BaseButton>
    <BaseButton variant="danger" disabled>Deshabilitado</BaseButton>
  </div>
</template>

<style scoped></style>
