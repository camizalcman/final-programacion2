<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

//Router View donde el router inserta la pagina correspondiente
<template>
  <Navbar />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <Footer />
</template>