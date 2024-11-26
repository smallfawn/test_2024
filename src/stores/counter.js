import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  getUserInfo,
  getLoginToken,
  getSiteConfig,
  ApiLoginDo,
  ApiLoginCheck, updateConfig
} from '@/assets/request'
export const useCounterStore = defineStore('counter', () => {

  //定义用户名和密码
  const username = ref('S')
  const password = ref('')
  const userToken = ref('')

  const tempUsername = ref('')
  const tempPassword = ref('')

  //定义cookie remark
  const tempRemark = ref('')
  const tempCookie = ref('')
  //定义bind 和 params
  const tempBind = ref('')
  const tempBindParams = ref('')
  const configTemplate = ref({})
  const wxpuserToken = ref('')
  const wxpuserUid = ref('')
  const wxpuserUidAdmin = ref([])
  //定义公告
  const notice = ref('')
  //定义网站名字
  const siteName = ref('')
  const QingLong = ref({
    qlUrl: "",
    qlAppid: "",
    qlAppSecret: "",
    qlToken: ""

  })
  const isDecodeUsername = ref('')
  const proxy = ref({
    proxyUrl: "",
    proxyToken: ""
  })
  const redis = ref({
    redisHost: "",
    redisPort: "",
    redisPassword: ""
  })
  const maxRetry = ref('')
  async function updateConfigApi() {
    const res = await updateConfig(configTemplate.value)
    if (res.code == 0) {
    }
  }
  async function ApiLoginDoApi() {
    const res = await ApiLoginDo({ username: tempUsername.value, password: tempPassword.value })
    if (res.code == 0) {
    }
  }
  async function ApiLoginCheckApi() {
    const res = await ApiLoginCheck({ username: tempUsername.value })
    if (res.code == 0) {
    }
  }
  async function getSiteConfigApi() {
    const res = await getSiteConfig({ params: "" })
    if (res.code == 0) {
    }
  }
  async function getUserInfoApi(params) {
    const res = await getUserInfo({ params: "" })
    if (res.code == 0) {
      //获取后台配置情况
      //获取QL
      //获取公告
      //获取网站名字
      //获取代理 获取redis 获取xxx等



      QingLong.value.qlAppSecret = res.data.QingLong.qlAppSecret
      QingLong.value.qlAppid = res.data.QingLong.qlAppid
      QingLong.value.qlToken = res.data.QingLong.qlToken
      QingLong.value.qlUrl = res.data.QingLong.qlUrl


      proxy.value.proxyToken = res.data.proxy.proxyToken
      proxy.value.proxyUrl = res.data.proxy.proxyUrl


      notice.value = res.data.notice
      siteName.value = res.data.siteName
      isDecodeUsername.value = res.data.isDecodeUsername
      maxRetry.value = res.data.maxRetry
      wxpuserUidAdmin.value = res.data.wxpuserUidAdmin

      redis.value.redisHost = res.data.redis.redisHost
      redis.value.redisPort = res.data.redis.redisPort
      redis.value.redisPassword = res.data.redis.redisPassword


    }
  }
  async function getLoginTokenApi() {
    const res = await getLoginToken({ username: username.value, password: password.value })
    if (res.code == 0) {
      userToken.value = res.data.token
    }
    if (res.code == 1) {
      //登录失败
    }
    if (res.code == 2) {
      //系统报错
    }
  }


  return {
    username,
    password,
    userToken,
    tempUsername,
    tempPassword,
    tempRemark,
    tempCookie,
    tempBind,
    tempBindParams,
    configTemplate,
    notice,
    siteName,
    QingLong,
    isDecodeUsername,
    proxy,
    redis,
    maxRetry,
    ApiLoginDoApi,
    ApiLoginCheckApi,
    getSiteConfigApi,
  }
})
