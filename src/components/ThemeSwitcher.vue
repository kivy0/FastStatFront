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
import { defineComponent, ref, computed} from "vue";
import { NButton, NIcon } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui'
import { MoonOutline as MoonIcon, SunnyOutline as SunIcon } from "@vicons/ionicons5";
export default defineComponent({
  components: {
    NButton,
    NIcon,
    MoonIcon,
    SunIcon
  },
  setup() {
    const isDark = ref(false)
    const themeIcon = computed(() => isDark.value ? SunIcon : MoonIcon)

    const switchTheme = () => {
      isDark.value = !isDark.value
    }

    return {
      isDark,
      themeIcon,
      switchTheme,
      theme: computed(() => (isDark.value ? darkTheme : lightTheme))
    }
  }
});
</script>

<style scoped>
.theme-switcher {
  margin-left: auto;
  margin-right: 30px;
}
</style>
