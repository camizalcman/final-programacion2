<script setup lang="ts">
</script>

<template>
  <footer class="bg-accent text-white px-6 md:px-12 lg:px-24">
    <div class="mx-auto py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="flex flex-col items-start gap-2">
        <div class="flex justify-center items-center gap-2">
          <img
        src="/public/images/hero/miRumbo.png"
        alt="logo"
        width="40"
        height="40"
      />

      <RouterLink to="/" class="font-heading font-semibold text-2xl text-white">
        Mi rumbo
      </RouterLink>
    </div>
    
        <p class="text-white/70 text-lg">
          Descubrí destinos increíbles y planificá tu próxima aventura.
        </p>
      </div>

      <ul class="flex gap-6 text-sm text-white/80 mt-4">
        <li><RouterLink to="/" class="hover:text-white transition-colors">Destinos</RouterLink></li>
        <li><RouterLink to="/research" class="hover:text-white transition-colors">Investigación</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>