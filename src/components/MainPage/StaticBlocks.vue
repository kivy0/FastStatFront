<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="2">
    <n-grid-item class="grid-item">
        <MainPageImageBlock />
    </n-grid-item>
    <n-grid-item class="grid-item">
      <n-grid :x-gap="12" :y-gap="8" :cols="2">
        <n-grid-item class="grid-item">
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
        </n-grid-item>
        <n-grid-item class="grid-item">
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
        </n-grid-item>
        <n-grid-item class="grid-item">
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
        </n-grid-item>
        <n-grid-item class="grid-item">
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { NGrid, NGridItem, NCard } from 'naive-ui'
import MainPageImageBlock from './ImageBlock.vue'
export default {
  components: {
    NGrid,
    NGridItem,
    NCard,
    MainPageImageBlock
  }
}
</script>

<style scoped>
.grid-item {
}

.box {
  height: 54.4vh;
}

.sub-box {
  font-size: 20px;
  font-weight: bold;
}
.n-card{align-items: center;  text-align: center;}
</style>
