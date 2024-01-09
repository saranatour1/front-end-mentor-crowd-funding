<script setup>
import AboutCard from './AboutCard/AboutCard.vue';
import CrowdCard from './CrowdCard/CrowdCard.vue';
import StatsCard from './StatsCard/StatsCard.vue';
</script>

<template>
  <CrowdCard />
  <div class="flex flex-col w-10/12 max-[375px]:w-11/12 items-center justify-start h-auto mx-auto  gap-6 mb-4">

    <StatsCard />
    <AboutCard />
  </div>
</template>