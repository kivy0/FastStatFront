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

<script>
import { NGrid, NGridItem } from 'naive-ui'
import ClassDistributionChart from './ClassDistributionChart.vue'
import VillageCityChart from './VillageCityChart.vue'

export default {
  components: {
    NGrid,
    NGridItem,

    ClassDistributionChart,
    VillageCityChart
  }
}
</script>

<style scoped>
.grid-item {
  margin: 10px;
}
</style>
