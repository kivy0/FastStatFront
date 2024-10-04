<template>
    <n-layout>
    <div class="app-container">
      <AppHeader />
      <div class="grid">
        <AppMenu />
        <div class="content">
          <slot></slot>
        </div>
      </div>
      <AppFooter />
    </div>
   </n-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppMenu from './AppMenu.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AppMenu
  },
  setup() {
  }
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Растягиваем контейнер на всю высоту окна */

}

.grid {
  display: flex;
  /height: 100vh;
}


.content {
}
</style>
