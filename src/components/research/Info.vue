<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Vue3Autocounter from 'vue3-autocounter'

const container = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!container.value) return

  //IntersectionObserver es una API nativa del navegador que permite detectar cuando un elemento entra o sale del viewport
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return

      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.5,
    }
  )

  observer.observe(container.value)
})
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
        <div ref="container" class="mb-2 ">
            <Vue3Autocounter
              v-if="visible"
              class="text-3xl md:text-4xl font-bold text-primary font-heading"
              :startAmount="2000"
              :endAmount="2014"
              :duration="1.5"
            />
          </div>

        <h4 class="text-white font-semibold mb-2">
          Lanzamiento
        </h4>

        <p class="text-white/70 text-sm">
          Evan You presentó la primera versión
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">

          <div ref="container" class="mb-2 ">
            <Vue3Autocounter
              v-if="visible"
              class="text-3xl md:text-4xl font-bold text-primary font-heading"
              :startAmount="0"
              :endAmount="12"
              :duration="1.5"
            />
          </div>
        <h4 class="text-white font-semibold mb-2">
          Descargas semanales
        </h4>

        <p class="text-white/70 text-sm">
          Del paquete oficial de Vue desde npm 
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <div class=" flex text-center w-full justify-center">
          <div ref="container" class="mb-2">
              <Vue3Autocounter
                v-if="visible"
                class="text-3xl md:text-4xl font-bold text-primary font-heading"
                :startAmount="70"
                :endAmount="84"
                :duration="1.5"
              />
            </div>
            <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">K+</p>
          </div>
        <h4 class="text-white font-semibold mb-2">
          Proyectos
        </h4>
        <p class="text-white/70 text-sm">
          Utilizan directamente el framework Vue.
        </p>
      </div>

      <div class="border border-primary rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/5 hover:shadow-lg hover:shadow-primary/20">
        <div class=" flex text-center w-full justify-center">
          <div ref="container" class="mb-2">
              <Vue3Autocounter
                v-if="visible"
                class="text-3xl md:text-4xl font-bold text-primary font-heading"
                :startAmount="0"
                :endAmount="10"
                :duration="1.5"
              />
            </div>
            <p class="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">+</p>
          </div>
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