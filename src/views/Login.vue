<script setup>
import { ref } from 'vue';
import { User,Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { getLoginToken } from "@/assets/request"
const router = useRouter()

const form = ref({
  type:"user",
  username: "",
  password:""
})

const login = ()=>{

  /**/ 
  getLoginToken({username:form.value.username,password:form.value.password})
  router.push({
    name:'home'
  })
}

</script>

<template>
  <div class="login">
    <el-form class="login-form">
      <div class="title">
        鹿飞后台管理系统
      </div>
      <el-form-item  label="类型：">
        <el-radio-group v-model="form.type">
          <el-radio value="user">用户登录</el-radio>
          <el-radio value="admin">管理员登录</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="账号：">
        <el-input v-model="form.username" :prefix-icon="User" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.password" :prefix-icon="Lock" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;margin-top: 20px;" type="primary" @click="login" size="large">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(../assets/login-background.f9f49138.jpg);
  background-size: cover;
}

.login-form {
  border-radius: 6px;
  background: #fff;
  width: 400px;
  padding: 25px;
}

.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}
</style>
