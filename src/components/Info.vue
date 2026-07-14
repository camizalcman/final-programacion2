<script setup lang="ts">
</script>
<template>
  <div class="gap-10 lg:gap-6 px-6 md:px-12 lg:px-24 py-20">
    <h2 class="font-heading md:text-3xl text-2xl font-bold text-white text-start md:mb-8 mb-6">
        Datos relevantes
    </h2>

    <div class="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4"
            v-motion
      :initial="{ opacity: 0, y: 40, scale:0.9}"
      :visible="{ opacity: 1, y: 0, scale:1, transition: { duration: 600 } }"
    >

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
          2014
        </p>
        <h4 class="text-white font-semibold mb-2">
          Lanzamiento
        </h4>
        <p class="text-white/70 text-sm">
          Evan You presentó la primera versión
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
          12 M+
        </p>
        <h4 class="text-white font-semibold mb-2">
          Descargas semanales
        </h4>
        <p class="text-white/70 text-sm">
          Instalaciones del paquete de Vue desde npm
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
          84 K+
        </p>
        <h4 class="text-white font-semibold mb-2">
          Proyectos
        </h4>
        <p class="text-white/70 text-sm">
          Utilizan directamente el framework Vue.
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
            10+
        </p>
        <h4 class="text-white font-semibold mb-2">
            Años de evolución
        </h4>
        <p class="text-white/70 text-sm">
            De desarrollo, mejoras y soporte de la comunidad.
        </p>
    </div>

    </div>

    
  </div>
</template>