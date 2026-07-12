<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/hero/ventana1.jpg',
  '/images/hero/ventana2.jpg',
  '/images/hero/ventana3.jpg',
  '/images/hero/ventana4.jpg',
  '/images/hero/ventana5.jpg',
  '/images/hero/ventana6.jpg',
]

const currentImage = ref(0)

let interval: number

onMounted(() => {
  interval = window.setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const scrollToDestinations = () => {
  document.getElementById('destinos')?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- Fondo carrusel -->
    <Transition name="fade">
      <img
        :key="currentImage"
        :src="images[currentImage]"
        class="absolute inset-0 h-full w-full object-cover"
      />

    </Transition>

    <img
        src="/images/hero/ala.png"
        alt="Ala de avión"
        class="absolute top-0 -left-10  w-[55%] pointer-events-none"
    />


   <!-- Overlay con agujero -->
    <svg class="absolute inset-0 h-full w-full">
      <defs>
        <mask id="window-mask">
          <!-- Todo visible -->
          <rect width="100%" height="100%" fill="white" />

          <!-- Agujero ventana -->
          <rect x="15%" y="15%" width="20%" height="70%" rx="150" fill="black" class="hidden xl:block"/>
        </mask>
      </defs>

      <!-- Overlay negro recortado -->
      <rect width="100%" height="100%" fill="black" opacity="0.7" mask="url(#window-mask)"/>
    </svg>


    <!-- Marco de ventana -->
    <div class="absolute right-[65%] top-1/2 h-[70vh] w-[20%] -translate-y-1/2 rounded-[150px] border-8 border-white/30 shadow-2xl hidden xl:block"></div>


    <!-- Contenido -->
  <div class="relative z-20 flex h-full items-center justify-end px-6 sm:px-12 lg:px-32 xl:px-8">
    <div class="w-full max-w-2xl text-center xl:mr-[10%] text-left">
      <h1 class="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        Explorá el mundo
      </h1>

      <p class="mt-4 text-base text-white/80 sm:text-lg lg:text-xl">
        Descubrí ciudades increíbles que te van a encantar, viví nuevas experiencias y conocé nuevas culturas
      </p>

      <button @click="scrollToDestinations" class="cursor-pointer mt-8 rounded-full bg-primary px-8 py-3 font-medium text-accent transition hover:bg-primary-dark">
        Ver destinos
      </button>
    </div>
  </div>


  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>