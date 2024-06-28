<template>
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
  top: 0;
  width: 240px;
  border-right: 1px solid #f0f0f0;
}

.content {
  flex-grow: 1;
}
</style>
