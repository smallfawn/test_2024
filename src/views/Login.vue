<script setup>
import { onMounted, ref, h } from 'vue';
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import Api from '@/utils/ReqUtils';
const router = useRouter()
import { ElNotification } from "element-plus";
import { useCounterStore } from '@/stores/counter'
const stores = useCounterStore()

const form = ref({
  type: "user",
  username: "",
  password: ""
})
const isLogin = ref(false)
const login = () => {

  /**/
  if (form.value.type == 'admin') {
    Api.adminLogin(form.value.username, form.value.password).then(res => {
      if (res.data.code == 0) {
        localStorage.setItem("token", res.data.data.token)
      }
    })
  }
  if (form.value.type == 'user') {
    Api.queueLogin(form.value.username, form.value.password).then(res => {
      if (res.data.code == 0) {
        localStorage.setItem("token", res.data.data.token)

        checkStatus()


      }
    })
  }

  router.push({
    name: 'home'
  })
  //for循环30s 每s一次请求
  async function checkStatus() {
    for (let i = 0; i < 30; i++) {
      if (!isLogin.value) {
        await Api.wait(1000)
        Api.checkQueueStatus(form.value.username).then(res => {
          if (res.data.code == 0) {
            console.log(res.data);
            isLogin.value = true
          }
        })
      }


    }
  }
}

const open = () => {
  ElNotification({
    title: stores.siteName,
    message: stores.notice,
    type: 'success',
    duration: 0
  });
}
onMounted(() => {
  Api.getConfig().then(res => {
    stores.notice = res.data.data.notice
    stores.siteName = res.data.data.siteName
    stores.maxRetry = res.data.data.maxRetry
    open();
  })

})

</script>

<template>
  <div class="login">
    <el-form class="login-form">
      <div class="title">
        鹿飞后台管理系统
      </div>
      <el-form-item label="类型：">
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
        <el-button style="width: 100%;margin-top: 20px;" type="primary" @click="login()" size="large">登录</el-button>
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
