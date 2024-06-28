<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="2">
    <n-grid-item class="grid-item">
      <n-card size='small'>
        <ClassDistributionChart />
      </n-card>
    </n-grid-item>
    <n-grid-item class="grid-item">
      <n-card size='small'>
        <ClassDistributionChart />
      </n-card>
    </n-grid-item>
    <n-grid-item class="grid-item">
      <n-card size='small'>
        <VillageCityChart />
      </n-card>
    </n-grid-item>
    <n-grid-item class="grid-item">
      <n-card size='small'>
        <VillageCityChart />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { NGrid, NGridItem, NCard } from 'naive-ui'
import ClassDistributionChart from './ClassDistributionChart.vue'
import VillageCityChart from './VillageCityChart.vue'

export default {
  components: {
    NGrid,
    NGridItem,
    NCard,
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
