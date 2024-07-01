<template>
  <n-card title="Авторизация">
    <n-form :model="formState" :rules="rules" @submit="handleSubmit">
      <n-form-item label="Логин" path="username">
        <n-input v-model:value="formState.username" placeholder="" />
      </n-form-item>
      <n-form-item label="Пароль" path="password">
        <n-input v-model:value="formState.password" type="password" placeholder="" />
      </n-form-item>
      <n-button type="primary" native-type="submit" style="width: 100%">Войти</n-button>
    </n-form>
  </n-card>
</template>

<script>
export default {
  data() {
    return {
      formState: {
        username: '',
        password: ''
      },
      rules: {
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
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('Успешная авторизация!')
        } else {
          alert('Ошибка валидации!')
        }
      })
    }
  }
}
</script>

<style scoped>
.n-card{
  align-items: center;
  max-width: 300px;
}
</style>
