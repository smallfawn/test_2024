<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  Lufly
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/UserLogin">用户登录</RouterLink>
        <RouterLink to="/AdminLogin">管理员登录</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
