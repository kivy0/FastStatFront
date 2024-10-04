<template>
  <n-button quaternary circle class="theme-switcher" @click="switchTheme">
    <template #icon>
      <n-icon>
        <component :is="themeIcon" />
      </n-icon>
    </template>
  </n-button>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';
import { NButton, NIcon } from 'naive-ui';
import { MoonOutline as MoonIcon, SunnyOutline as SunIcon } from "@vicons/ionicons5";

export default defineComponent({
  components: {
    NButton,
    NIcon,
    MoonIcon,
    SunIcon
  },
  setup() {
    const isDark = inject('isDark');
    const switchTheme = inject('switchTheme');
    const themeIcon = computed(() => (isDark.value ? SunIcon : MoonIcon));

    return {
      themeIcon,
      switchTheme
    };
  }
});
</script>

<style scoped>
.theme-switcher {
  margin-left: auto;
  margin-right: 30px;
}
</style>
