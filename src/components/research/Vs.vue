<script setup lang="ts">
</script>
<template>  

    <div class="gap-10 lg:gap-6 px-6 md:px-12 lg:px-24 py-20">
        <h2 class="font-heading md:text-3xl text-2xl font-bold text-white text-start md:mb-8 mb-6">
            Composition API vs Options API
        </h2>

      <div class="flex flex-col lg:flex-row gap-6">

        <!-- Options API -->
        <div class="rounded-xl border border-primary p-5 lg:w-[50%]"
          v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
            <h4 class="text-xl font-heading font-semibold text-primary mb-4">
            Options API
            </h4>

            <ul class="space-y-2 text-white/80 mb-5">
            <li>• Organiza el código según su tipo.</li>
            <li>• Los datos se definen en <code>data()</code>.</li>
            <li>• Las funciones van en <code>methods</code>.</li>
            <li>• Los valores calculados se escriben en <code>computed</code>.</li>
            <li>• Es el enfoque clásico de Vue.</li>
            </ul>

            <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
        <pre>&lt;script&gt;
        export default {
        data() {
            return {
            count: 0
            }
        },
        methods: {
            increment() {
            this.count++
            }
        } }
        &lt;/script&gt;</pre>
            </div>
        </div>

        <!-- Composition API -->
        <div class="rounded-xl border border-primary p-5 lg:w-[50%]"
              v-motion
      :initial="{ opacity: 0, x: 40 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
            <h4 class="text-xl font-heading font-semibold text-primary mb-4">
            Composition API
            </h4>

            <ul class="space-y-2 text-white/80 mb-5">
            <li>• Organiza el código por funcionalidad.</li>
            <li>• Utiliza <code>ref()</code> y <code>reactive()</code>.</li>
            <li>• Emplea <code>&lt;script setup&gt;</code>.</li>
            <li>• Facilita reutilizar lógica mediante composables.</li>
            <li>• Es el enfoque recomendado en Vue 3.</li>
            </ul>

            <div class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
        <pre>&lt;script setup lang="ts"&gt;
        import { ref } from 'vue'

        const count = ref(0)

        function increment() {
            count.value++
        }
        &lt;/script&gt;</pre>
            </div>
        </div>


      </div>
   </div>


</template>