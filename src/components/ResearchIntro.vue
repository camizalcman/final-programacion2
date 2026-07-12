<script setup lang="ts">
</script>

<template>
  <section class="flex lg:flex-row items-center justify-center gap-10 lg:gap-6 px-6 lg:px-24 py-16">
    <div
      class="w-full lg:w-[70%] pt-24"
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
    >
      <h3 class="text-white text-2xl sm:text-4xl font-heading font-bold leading-snug">
        <span class="font-extrabold">Vue es un framework de JavaScript</span>
        <br class="hidden sm:block" />
        <span class="font-medium">para la creación de interfaces de usuario.</span>
      </h3>

      <h4 class="text-white/70 font-body text-base sm:text-xl mt-6 leading-relaxed">
        Proporciona un modelo de programación declarativo basado en componentes que permite
        desarrollar de forma eficiente.
      </h4>
      <button class="cursor-pointer mt-8 rounded-full bg-primary px-8 py-3 font-medium text-accent transition hover:bg-primary-dark">Conocer más</button>

    </div>

    <div
      class="w-full lg:w-1/2 flex justify-center"
      v-motion
      :initial="{ opacity: 0, scale: 0.8, x: 40 }"
      :enter="{ opacity: 1, scale: 1, x: 0, transition: { duration: 700, delay: 200 } }"
    >
      <img
        src="/images/research/logoVue.webp"
        alt="Logo Vue"
        class="w-40 sm:w-56 lg:w-72"
      />
    </div>
  </section>
</template>