<template>
  <n-space vertical>
    <n-spin :show="loading" size="large">
      <n-card title="Авторизация">
        <n-form :model="formState" :rules="rules" ref="form">
          <n-form-item label="Логин" path="username">
            <n-input v-model:value="formState.username" placeholder="" />
          </n-form-item>
          <n-form-item label="Пароль" path="password">
            <n-input v-model:value="formState.password" type="password" placeholder="" />
          </n-form-item>
          <n-button type="primary" @click="handleSubmit" style="width: 100%">Войти</n-button>
        </n-form>
      </n-card>
    </n-spin>
  </n-space>
</template>

<script>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { authUser } from '../auth_api.js';

export default {
  props: {
    onClose: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const formState = ref({
      username: '',
      password: ''
    });
    const rules = ref({
      username: {
        type: 'string',
        required: true,
        message: 'Пожалуйста, введите имя пользователя'
      },
      password: {
        type: 'string',
        required: true,
        message: 'Пожалуйста, введите пароль'
      }
    });
    const loading = ref(false);
    const message = useMessage();

    const handleSubmit = async () => {
      console.log('Submit event triggered');
      loading.value = true;
      try {
        const response = await authUser(formState.value);
        message.success('Успешная авторизация!');
        console.log('User logged in successfully:', response);
        props.onClose();
      } catch (error) {
        message.error('Ошибка авторизации!');
        console.error('Failed to login:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      formState,
      rules,
      loading,
      handleSubmit
    };
  }
}
</script>

<style scoped>
.n-card {
  align-items: center;
  max-width: 300px;
}
</style>
