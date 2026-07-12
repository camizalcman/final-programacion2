<script setup lang="ts">
</script>

<template>
  <nav class="flex items-center justify-between px-24 py-4 bg-accent sticky top-0 z-30">
    <RouterLink to="/" class="font-heading font-semibold text-xl text-white">
      Mundo Viajero
    </RouterLink>

    <div class="flex gap-6">
      <RouterLink
        to="/"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Destinos
      </RouterLink>

      <RouterLink
        to="/admin"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Admin
      </RouterLink>

      <RouterLink
        to="/research"
        class="font-body font-medium text-white hover:text-primary-dark transition-colors duration-200"
        active-class="text-primary-dark"
      >
        Investigación
      </RouterLink>
    </div>
  </nav>
</template>