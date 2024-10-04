<template>
    <BasePage>
     <StaticBlocks />
     <ChartsBlock />
    </BasePage>
</template>

<script>
import { defineComponent } from 'vue'
import BasePage from '../components/BasePage.vue'
import StaticBlocks from '../components/MainPage/StaticBlocks.vue'
import ChartsBlock from '../components/MainPage/ChartsBlock.vue'


export default defineComponent({
  components: {
    BasePage,
    StaticBlocks,
    ChartsBlock,
  },
  setup() {
  }
})
</script>
