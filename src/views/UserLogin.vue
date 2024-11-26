<template>
  <div class="login-container">
    <el-form ref="loginFormRef" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="counter.tempUsername" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="counter.tempPassword" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>

import { useCounterStore } from '@/stores/counter.js';
const counter = useCounterStore();
console.log(counter.username);
function handleLogin() { }
//counter.username
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>