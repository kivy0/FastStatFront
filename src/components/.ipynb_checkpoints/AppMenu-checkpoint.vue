<template>
    <div class="menu">
      <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
    </div>
    <n-modal v-model:show="showLoginForm">
      <LoginForm @close="showLoginForm = false" />
    </n-modal>
</template>

<script>
import { defineComponent, h , ref} from "vue";
import { NIcon } from "naive-ui";
import { useRouter } from 'vue-router';
import LoginForm from './LoginForm';
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  AnalyticsOutline as AnalyticsIcon,
  MapOutline as MapIcon,
  LogInOutline as LoginIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
{
    label: "Авторизация",
    key: "button-login",
    icon: renderIcon(LoginIcon),
    action: "login",
  },
  {
    type: 'divider',
  },
  {
    label: "Главная",
    key: "button-home",
    icon: renderIcon(HomeIcon),
    link: { name: 'MainPage' }
  },
  {
    label: "Аналитика",
    key: "button-analytics",
    icon: renderIcon(AnalyticsIcon),
    link: { name: 'AnalyticsPage' }
  },
  {
    label: "Описание заданий",
    key: "button-description",
    icon: renderIcon(BookIcon),
    link: { name: 'TaskInfoPage' }
  },
  {
    label: "Интерактивная карта",
    key: "button-map",
    icon: renderIcon(MapIcon),
    link: 'https://educationmap.22edu.ru/'
  },
];

export default defineComponent({
  components: {
    LoginForm
  },
  setup() {
    const router = useRouter();
    const showLoginForm = ref(false);
    return {
      menuOptions,
      showLoginForm,
      handleUpdateValue(key, item) {
        if (item.action === 'login') {
          showLoginForm.value = true;
        } else if (typeof item.link === 'string') {
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
.menu {
}
.n-menu {
    width: 240px;
    position: sticky;
    top: 0;
}
</style>
