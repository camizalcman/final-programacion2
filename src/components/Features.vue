<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  BoltIcon,
  Square3Stack3DIcon,
  ArrowsRightLeftIcon,
  CalculatorIcon,
  ClockIcon,
} from '@heroicons/vue/24/solid'

const features = [
  {
    id: 'reactivity',
    title: 'Reactividad',
    icon: BoltIcon,
  },
  {
    id: 'directives',
    title: 'Directivas',
    icon: Square3Stack3DIcon,
  },
  {
    id: 'props',
    title: 'Props y comunicación',
    icon: ArrowsRightLeftIcon,
  },
  {
    id: 'computed',
    title: 'Computed properties',
    icon: CalculatorIcon,
  },
  {
    id: 'lifecycle',
    title: 'Lifecycle Hooks',
    icon: ClockIcon,
  },
]

const activeId = ref(features[0].id)

const activeFeature = computed(() =>
  features.find((f) => f.id === activeId.value)
)
</script>

<template>
  <section class="bg-accent px-6 lg:px-24 py-20">
    <h2 class="font-heading text-3xl font-semibold text-white text-center mb-16">
      Características principales
    </h2>

    <div class=" mx-auto lg:flex lg:gap-6">

      <!-- Cards con títulos -->
      <div class="w-full lg:w-[40%]">
        <MotionGroup
          tag="div"
          preset="slideVisibleLeft"
          :duration="1000"
          class="flex flex-col gap-3"
        >
          <button
            v-for="feature in features"
            :key="feature.id"
            @click="activeId = feature.id"
            class="flex items-center gap-2 w-[100%] px-4 py-6 rounded-xl cursor-pointer transition-all"
            :class="
              activeId === feature.id
                ? 'bg-primary text-accent'
                : ' text-white/70 hover:bg-white/10 hover:text-white'
            "
          >
            <component :is="feature.icon" class="w-5 h-5" />
            <span>{{ feature.title }}</span>
          </button>
        </MotionGroup>
      </div>

      <!-- Columna derecha -->
      <div class="w-full lg:w-[60%] mt-8 lg:mt-0">
        <Transition name="fade" mode="out-in">
          <div
            :key="activeId"
            class="bg-white/5 border border-primary rounded-2xl p-8 h-full"
          >
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ activeFeature?.title }}
            </h3>

            <p class="text-white/70">
              Acá va el contenido...
            </p>
          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>