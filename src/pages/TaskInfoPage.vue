<template>
    <BasePage>
        <MainPageImageBlock />
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
        <MainPageImageBlock />
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество ОО">
            <div class="sub-box">642</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников в 2024">
            <div class="sub-box">128040</div>
          </n-card>
          <n-card  size='small' embedded :bordered="false" title="Количество ОО, участвующих в перепроверке">
            <div class="sub-box">40</div>
          </n-card>
          <n-card size='small' embedded :bordered="false" title="Количество участников, участвующих в перепроверке">
            <div class="sub-box">1354</div>
          </n-card>
    </BasePage>
</template>

<script>
import { defineComponent } from 'vue'
import BasePage from '../components/BasePage.vue'
import { NCard } from 'naive-ui'
import MainPageImageBlock from '../components/MainPage/ImageBlock.vue'

export default defineComponent({
  components: {
    BasePage,
    NCard,
    MainPageImageBlock
  },
  setup() {
  }
})
</script>


<style scoped>
.grid-item {
  margin: 10px;
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
