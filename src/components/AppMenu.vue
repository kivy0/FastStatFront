<template>
  <div class="sidebar">
      <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import { NIcon } from "naive-ui";
import { useRouter } from 'vue-router';
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  AnalyticsOutline as AnalyticsIcon,
  MapOutline as MapIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "Главная",
    key: "button-1",
    icon: renderIcon(HomeIcon),
    link: { name: 'MainPage' }
  },
  {
    label: "Аналитика",
    key: "button-2",
    icon: renderIcon(AnalyticsIcon),
    link: { name: 'AnalyticsPage' }
  },
  {
    label: "Описание заданий",
    key: "button-3",
    icon: renderIcon(BookIcon),
    link: { name: 'TaskInfoPage' }
  },
  {
    label: "Интерактивная карта",
    key: "button-4",
    icon: renderIcon(MapIcon),
    link: 'https://educationmap.22edu.ru/'
  },
];

export default defineComponent({
  setup() {
    const router = useRouter();
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        if (typeof item.link === 'string') {
          window.location.href = item.link;
        } else {
          router.push(item.link);
        }
      }
    };
  }
});

</script>

<style scoped>

.sidebar {
  position: sticky;
  top: 0;
  width: 240px;
}

</style>
