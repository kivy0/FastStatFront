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
  height: 100vh;

}

.grid {
  display: flex;
}

.content {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
