<script setup lang="ts" >
import { ref } from 'vue'
import { NCard } from 'naive-ui';
import BasePage from '../components/BasePage.vue';
import SelectorsMenu from '../components/AnalyticsPage/SelectorsMenu.vue';
import TableBlock from '../components/AnalyticsPage/TableBlock.vue';

const data = ref( [
  {
    group: "Все муниципалитеты",
    participants: 2304,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.6,
    educationQuality: 53.1,
    successRate: 95
  },
  {
    group: "Алейский район",
    participants: 14,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.5,
    educationQuality: 50,
    successRate: 85.7
  },
  {
    group: "МКУ «Кашинская средняя общеобразовательная школа» имени Героя России А.И. Сугакова",
    participants: 8,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3.9,
    educationQuality: 75,
    successRate: 87.5
  },
  {
    group: "МКУ \"Уропинская СОШ\"",
    participants: 6,
    grade2: "5.1",
    grade3: "41.9",
    grade4: "48",
    grade5: "37",
    averageGrade: 3,
    educationQuality: 16.7,
    successRate: 83.4
  }
]);
</script>

<template>
  <BasePage>
    <n-card class="grid-container">
      <SelectorsMenu />
      <TableBlock :data="data"  />
    </n-card>
  </BasePage>
</template>

<style scoped>
.n-card {
  align-items: center;
  height: 100%;
  width: 100%;
}

.n-h1 {
  text-align: center;
}

.year-label {
  text-align: left;
  white-space: nowrap;
  font-weight: 500;
  font-size: medium;
}
</style>
