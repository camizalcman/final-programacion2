<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  BoltIcon,
  Square3Stack3DIcon,
  ArrowsRightLeftIcon,
  CalculatorIcon,
  ClockIcon,
} from '@heroicons/vue/24/solid'
import ReactivityFeature from '@/components/features/ReactivityFeature.vue'
import DirectivesFeature from '@/components/features/DirectivesFeature.vue'
import PropsFeature from '@/components/features/PropsFeature.vue'
import ComputedFeature from '@/components/features/ComputedFeature.vue'
import LifecycleFeature from '@/components/features/LifecycleFeature.vue'

const features = [
  {
    id: 'reactivity',
    title: 'Reactividad',
    icon: BoltIcon,
    component: ReactivityFeature,
  },
  {
    id: 'directives',
    title: 'Directivas',
    icon: Square3Stack3DIcon,
    component: DirectivesFeature,
  },
  {
    id: 'props',
    title: 'Comunicación entre componentes',
    icon: ArrowsRightLeftIcon,
    component: PropsFeature,
  },
  {
    id: 'computed',
    title: 'Propiedades computadas',
    icon: CalculatorIcon,
    component: ComputedFeature,
  },
  {
    id: 'lifecycle',
    title: 'Ciclo de vida',
    icon: ClockIcon,
    component: LifecycleFeature,
  },
]

//por defecto el activo es la primera feature
const activeId = ref(features[0]?.id)

//se busca el feature cuyo id sea = a activeID
const activeFeature = computed(() =>
  features.find((f) => f.id === activeId.value)
)
</script>

<template>
  <section class="bg-accent py-20 gap-10 lg:gap-6 px-6 md:px-12 lg:px-24">
    <h2 class="font-heading md:text-3xl text-2xl font-bold text-white text-start md:mb-8 mb-6">
      Conceptos principales
    </h2>

    <div class="mx-auto md:flex gap-2 md:gap-6">

      <!-- Cards con títulos -->
      <div class="w-full md:w-[30%]">
        <MotionGroup
          tag="div"
          preset="slideVisibleLeft"
          :duration="500"
          class="flex flex-col gap-3"
        >
          <button
            v-for="feature in features"
            :key="feature.id"
            @click="activeId = feature.id"
            class="flex items-center text-left gap-3 w-[100%] px-4 py-4 md:py-8 rounded-xl cursor-pointer transition-all"
            :class="
              activeId === feature.id
                ? 'bg-primary text-accent'
                : ' text-white/90 hover:bg-white/10 hover:text-white'
            "
          >
            <component :is="feature.icon" class="w-5 h-5" />
            <h2 class="font-heading font-semibold text-lg">{{ feature.title }}</h2>
          </button>
        </MotionGroup>
      </div>

      <!-- Explicacion de cada feature -->
      <div class="w-full md:w-[70%] mt-8 lg:mt-0"
          v-motion
      :initial="{ opacity: 0, x: 40 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >

          <div
            :key="activeId"
            class="bg-white/5 border border-primary rounded-2xl p-6 h-full"
          >
            <component :is="activeFeature?.component" />
          </div>
      </div>

    </div>
  </section>
</template>