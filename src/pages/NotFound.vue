<script setup lang="ts">
import router from "@/router";

const goHome = () => {
	router.push('/')
}
</script>

<template>
  <n-space vertical align="center" justify="center" style="height: 100vh;">
    <n-alert type="error" title="404 Not Found" />
    <n-button @click="goHome">Вернуться на главную</n-button>
  </n-space>
</template>


