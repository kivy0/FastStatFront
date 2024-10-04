<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui';

export default defineComponent({
  components: {
    NConfigProvider,
    NMessageProvider,
  },
  setup() {
    const isDark = ref(false);
    const theme = computed(() => (isDark.value ? darkTheme : lightTheme));

    const switchTheme = () => {
      isDark.value = !isDark.value;
    };

    provide('isDark', isDark);
    provide('theme', theme);
    provide('switchTheme', switchTheme);

    return {
      isDark,
      theme,
      switchTheme
    };
  }
});
</script>
