<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

//Router View donde el router inserta la vista actual
<template>
  <Navbar />
  <main class="min-h-screen bg-bg">
    <RouterView />
  </main>
  <Footer />
</template>