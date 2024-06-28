<template>
    <div class="footer-container">
      <div class="footer-content">
        <n-image
          class="footer-logo"
          width="200"
          src="https://stat.22edu.ru/static/images/logo.jpg"
          alt="Logo"
          preview-disabled
        />
        <div class="footer-text">
          2024 © КАУ ДПО АИЦТиОКО имени О.Р. Львова
        </div>
        <n-image
          class="footer-logo"
          width="200"
          src="https://indexmap.22edu.ru/static/images/aictioko.jpg"
          alt="Logo"
          preview-disabled
        />
      </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { NImage } from 'naive-ui';

export default defineComponent({
  components: {
    NImage
  }
});
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  background-color: #FFFFFF;
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
</style>
