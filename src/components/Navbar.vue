<script setup lang="ts">
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-bg-card shadow-md sticky top-0 z-30">
    <RouterLink to="/" class="font-heading font-semibold text-xl text-accent">
      Mundo Viajero
    </RouterLink>

    <div class="flex gap-6">
      <RouterLink
        to="/"
        class="font-body font-medium text-text-muted hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Destinos
      </RouterLink>

      <RouterLink
        to="/admin"
        class="font-body font-medium text-text-muted hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Admin
      </RouterLink>

      <RouterLink
        to="/research"
        class="font-body font-medium text-text-muted hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Investigación
      </RouterLink>
    </div>
  </nav>
</template>