<template>
  <n-page-header>
    <div class="header-container">
      <n-image
        class="header-logo"
        width="200"
        src="https://stat.22edu.ru/static/images/logo.jpg"
        alt="Logo"
        preview-disabled
      />
      <div class="header-title">
        <div style="color: #00158f; font-size: 24px;">
          Система аналитики Всероссийских проверочных работ в Алтайском крае
        </div>
        <div style="font-size: 12px;">
          КАУ ДПО "АЛТАЙСКИЙ ИНСТИТУТ ЦИФРОВЫХ ТЕХНОЛОГИЙ И ОЦЕНКИ КАЧЕСТВА ОБРАЗОВАНИЯ ИМЕНИ О.Р. ЛЬВОВА"
        </div>
      </div>
      <ThemeSwitcher />
    </div>
  </n-page-header>
</template>

<script>
import { defineComponent } from "vue";
import { NPageHeader, NImage } from 'naive-ui';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default defineComponent({
  components: {
    NPageHeader,
    NImage,
    ThemeSwitcher
  }
});
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  background-color: #FFFFFF;
}

.header-logo {
  margin-left: 30px;
  margin-right: 30px;
}

.header-title {
  display: flex;
  flex-direction: column;
}
</style>
