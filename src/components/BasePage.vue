<template>
    <n-layout>
    <div class="app-container">
      <AppHeader />
      <div class="grid">
        <div class="menu">
          <AppMenu />
        </div>
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

<style>
.app-container {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
  flex-grow: 1;
}

.menu {
  flex-grow: 1;
  width: 240px;
}

.content {
  flex-grow: 1;
}
</style>
