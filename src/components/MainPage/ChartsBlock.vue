<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="2">
    <n-grid-item class="grid-item">
        <ClassDistributionChart />
    </n-grid-item>
    <n-grid-item class="grid-item">
        <ClassDistributionChart />
    </n-grid-item>
    <n-grid-item class="grid-item">
        <VillageCityChart />
    </n-grid-item>
    <n-grid-item class="grid-item">
        <VillageCityChart />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui'
import ClassDistributionChart from './ClassDistributionChart.vue'
import VillageCityChart from './VillageCityChart.vue'

</script>

<style scoped>
</style>
