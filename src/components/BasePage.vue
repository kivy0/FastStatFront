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

<script setup lang="ts">

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
