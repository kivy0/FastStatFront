<script>
import { defineComponent } from 'vue';
import { NCard } from 'naive-ui';
import BasePage from '../components/BasePage.vue';
import SelectorsMenu from '../components/AnalyticsPage/SelectorsMenu.vue';
import TableBlock from '../components/AnalyticsPage/TableBlock.vue';
import { ref } from 'vue';

export default defineComponent({
  components: {
    NCard,
    BasePage,
    SelectorsMenu,
    TableBlock
  },
  setup() {
    const isShowTable = ref(false)
    return {
      isShowTable
      }
  }
});
</script>

<style scoped>
.n-card {
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

  
<template>
  <BasePage>
    <NCard class="grid-container">
      <SelectorsMenu @change="(value) =>{
        isShowTable = !!value
        } "/>
      <TableBlock v-if='isShowTable'/>
    </NCard>
  </BasePage>
</template>