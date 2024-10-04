<script setup lang="ts">
import { NImage } from 'naive-ui';

</script>

<template>
	<n-divider />
	<div class="footer-container">
		<div class="footer-content">
			<a href="http://vpr22.22edu.ru/">
				<n-image
						class="header-logo"
						width="200"
						src="vpr.png"
						alt="Logo"
						preview-disabled
				/>
			</a>
			<div class="footer-text">
				2024 © КАУ ДПО АИЦТиОКО имени О.Р. Львова
			</div>
			<a href="https://aictioko.ru/">
				<n-image
						class="footer-logo"
						width="200"
						src="/aictioko.png"
						alt="Logo"
						preview-disabled
				/>
			</a>

		</div>
	</div>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-logo {
  margin-left: 10px;
  margin-right: 10px;
}

.footer-text {
  text-align: center;
}

.n-divider {
  margin: 0;
}
</style>
