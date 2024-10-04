<template>
  <BasePage>
    <n-card class="grid-container">
      <SelectorsMenu />
      <TableBlock />
    </n-card>
  </BasePage>
</template>

<script>
import { defineComponent } from 'vue';
import { NCard } from 'naive-ui';
import BasePage from '../components/BasePage.vue';
import SelectorsMenu from '../components/AnalyticsPage/SelectorsMenu.vue';
import TableBlock from '../components/AnalyticsPage/TableBlock.vue';

export default defineComponent({
  components: {
    NCard,
    BasePage,
    SelectorsMenu,
    TableBlock
  },
  setup() {
    return {
      }
  }
});
</script>

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
