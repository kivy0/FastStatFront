<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui';


const isDark = ref(false);
const theme = computed(() => (isDark.value ? darkTheme : lightTheme));

const switchTheme = () => {
	isDark.value = !isDark.value;
};

provide('isDark', isDark);
provide('theme', theme);
provide('switchTheme', switchTheme);

</script>



<template>
	<n-config-provider :theme="theme">
		<n-loading-bar-provider>
			<n-message-provider :max="3">
				<n-notification-provider>
					<n-modal-provider>
						<n-dialog-provider>
							<router-view />
						</n-dialog-provider>
					</n-modal-provider>
				</n-notification-provider>
			</n-message-provider>
		</n-loading-bar-provider>
	</n-config-provider>
</template>
