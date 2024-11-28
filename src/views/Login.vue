<script setup>
import { onMounted, ref, h } from 'vue';
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import Api from '@/utils/ReqUtils';
const router = useRouter()
import { ElNotification } from "element-plus";
import { useCounterStore } from '@/stores/counter'
const stores = useCounterStore()
import { ElMessage, ElMessageBox } from 'element-plus'

const form = ref({
  type: "user",
  username: "",
  password: ""
})
const isFlag = ref(false)
const login = () => {

  /**/
  if (form.value.type == 'admin') {
    Api.adminLogin(form.value.username, form.value.password).then(res => {
      if (res.data.code == 0) {
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
        router.push({
          name: 'home'
        })
        localStorage.setItem("token", res.data.data.token)
        Api.getAdminInfo().then(res => {
          if (res.data.code == 0) {

          }


        })
      }
    })
  }
  if (form.value.type == 'user') {
    Api.queueLogin(form.value.username, form.value.password).then(res => {
      if (res.data.code == 0) {
        checkStatus()
      }

    })
  }



  //for循环30s 每s一次请求
  async function checkStatus() {
    for (let i = 0; i < 30; i++) {
      if (!isFlag.value) {
        await Api.wait(2000)
        let { data: res } = await Api.checkQueueStatus(form.value.username)
        if (res.code == 0) {
          localStorage.setItem("token", res.data.token)
          isFlag.value = true
          Api.getUserInfo().then(res => {
            //
          })
          router.push({
            name: 'home'
          })
          return
        }
        if (res.code == 2) {
          ElMessageBox.confirm(res.msg, '警告')
            .then(() => {

            });
          //账号或密码错误
          return
        }
        if (res.code == 3) {
          //账号被风控 这里弹窗让用户跳转到风控链接
          ElMessageBox.confirm('账号存在风险，请点击确认进入链接进行验证,验证通过后再次提交即可', '警告')
            .then(() => {
              window.open(res.data);
            });
          return;
        }

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
        Lufly Center
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
