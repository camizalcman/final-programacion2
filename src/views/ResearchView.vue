<script setup lang="ts">
import Features from '@/components/research/Features.vue';
import Info from '@/components/research/Info.vue';
import ResearchIntro from '@/components/research/ResearchIntro.vue'
import Sfc from '@/components/research/Sfc.vue';
import Vs from '@/components/research/Vs.vue';

</script>

<template>
  <div class="bg-accent overflow-x-hidden">
    <ResearchIntro />
    <Features id="info" />
    <Sfc />
    <Vs />
    <Info />
  </div>
</template>