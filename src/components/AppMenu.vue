<template>
  <div class="menu">
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
  </div>
  <n-modal v-model:show="showLoginForm">
    <LoginForm @close="handleLoginSuccess" />
  </n-modal>
</template>

<script setup lang="ts">
import { h, ref, onMounted } from "vue";
import { NIcon } from "naive-ui";
import { useRouter } from 'vue-router';
import LoginForm from './LoginForm';
import { getCurrentUser, logoutUser } from '@/auth_api';
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  AnalyticsOutline as AnalyticsIcon,
  MapOutline as MapIcon,
  LogInOutline as LoginIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = ref([
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
    disabled: true,
    link: { name: 'TaskInfoPage'}
  },
  {
    label: "Интерактивная карта",
    key: "button-map",
    icon: renderIcon(MapIcon),
    link: 'https://educationmap.22edu.ru/'
  },
]);

const router = useRouter();
const showLoginForm = ref(false);
const currentUser = ref(null);

onMounted(async () => {
	try {
		const user = await getCurrentUser();
		currentUser.value = user;
		updateMenuOptions();
	} catch (error) {
		console.error('Error fetching current user:', error);
	}
});

const updateMenuOptions = () => {
	if (currentUser.value) {
		menuOptions.value[0] = {
			label: currentUser.value.full_name,
			key: "button-logout",
			icon: renderIcon(LogoutIcon),
			action: "logout",
		};
	} else {
		menuOptions.value[0] = {
			label: "Авторизация",
			key: "button-login",
			icon: renderIcon(LoginIcon),
			action: "login",
		};
	}
};

const handleLoginSuccess = async () => {
	showLoginForm.value = false;
	try {
		const user = await getCurrentUser();
		currentUser.value = user;
		updateMenuOptions();
	} catch (error) {
		console.error('Error fetching current user:', error);
	}
};

const handleUpdateValue = async (key, item) => {
	if (item.action === 'login') {
		showLoginForm.value = true;
	} else if (item.action === 'logout') {
		try {
			await logoutUser();
			currentUser.value = null;
			updateMenuOptions();
		} catch (error) {
			console.error('Error during logout:', error);
		}
	} else if (typeof item.link === 'string') {
		window.location.href = item.link;
	} else {
		router.push(item.link);
	}
}
</script>

<style scoped>

.n-menu {
  width: 240px;
  position: sticky;
  top: 0;
}
</style>
