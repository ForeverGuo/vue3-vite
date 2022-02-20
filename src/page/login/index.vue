<template>
  <div class="login">
    <el-form
    class="form"
    :label-position="labelPosition"
    label-width="100px"
    :model="form"
    style="max-width: 350px"
  >
    <el-form-item label="用户">
      <el-input v-model.trim="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model.trim="form.password"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" @click.stop="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { userLogin } from '@/api/index'
import { ElMessage } from 'element-plus'
const labelPosition = ref('right')

const form = reactive({
  userName: '',
  password: '',
})

const handleLogin = () => {
  userLogin(form).then(res => {
    console.log(res)
    if(res.code === 10000) {

    } else {
      ElMessage({
        message: `${res.message}`,
        type: 'warning',
      })
    }
  })
}

</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #1a2980, #26d0ce);
  .form {
    width: 350px;
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -175px;
    .el-form-item__label {
      color: #fff;
      font-size: 16px;
    }
    .el-button {
      width: 150px;
      margin: 0 auto;
      font-size: 18px;
    }
    .el-form-item {
      margin-bottom: 30px;
    }
  }
}
</style>
