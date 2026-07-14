<script setup lang="ts">
</script>
<template>
  <div class="gap-10 lg:gap-6 px-6 md:px-12 lg:px-24 py-20">
    <h2 class="font-heading md:text-3xl text-2xl font-bold text-white text-start md:mb-8 mb-6">
      Single File Component
    </h2>
    
    <div class="flex flex-col md:flex-row gap-4 md:gap-6">
      <p class="text-white/80 leading-relaxed mb-4 md:w-[30%]"
        v-motion
      :initial="{ opacity: 0, x: -40 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        Los componentes se suelen escribir como un
        <strong class="text-primary">Single File Component (SFC)</strong>,
        es decir, un único archivo <code class="text-primary">.vue</code>
        que reúne la estructura, la lógica y, opcionalmente, los estilos.
      </p>

      <div class="bg-accent/60 rounded-xl border border-primary p-4 mb-6 md:w-[70%]"
          v-motion
      :initial="{ opacity: 0, x: 40 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        <h4 class="text-lg font-semibold text-white mb-3">
          Estructura de un SFC
        </h4>

        <div class="rounded-lg bg-[#1e1e1e] p-4 font-mono text-sm leading-7">
          <span class="text-pink-400">&lt;script setup lang="ts"&gt;</span><br>
          <span class="text-gray-400 ml-4">//Contiene la lógica del componente: variables reactivas, funciones,
              props, eventos, hooks y cualquier comportamiento.</span><br>
          <span class="text-pink-400">&lt;/script&gt;</span>

          <br><br>

          <span class="text-pink-400">&lt;template&gt;</span><br>
          <span class="text-gray-400 ml-4">&lt;!-- Define la estructura visual utilizando HTML y las directivas de Vue. --&gt;</span><br>
          <span class="text-pink-400">&lt;/template&gt;</span>

          <br><br>

          <span class="text-pink-400">&lt;style scoped&gt;</span><br>
          <span class="text-gray-400 ml-4">/* Permite agregar estilos propios del componente (opcional) */</span><br>
          <span class="text-pink-400">&lt;/style&gt;</span>
        </div>
      </div>
    </div>

  </div>
</template>