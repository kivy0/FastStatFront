<template>
  <n-space vertical align="center" justify="center" style="height: 100vh;">
    <n-alert type="error" title="404 Not Found" />
    <n-button @click="goHome">Вернуться на главную</n-button>
  </n-space>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
</style>