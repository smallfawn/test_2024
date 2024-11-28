import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const loginType = ref('')
  //定义用户名和密码
  const adminUsername = ref('S')
  const adminPassword = ref('')
  const adminToken = ref('')

  const userUsername = ref('')
  const userPassword = ref('')

  //定义cookie remark
  const userRemark = ref('')
  const userCookie = ref('')
  const userPin = ref('')
  //定义bind 和 params
  const userBind = ref({
    typeof: '',
    params: ''
  })
  const wxpuserToken = ref('')
  const wxpuserUid = ref('')
  const wxpuserUidAdmin = ref('')
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
  const maxRetry = ref('')



  return {
    adminUsername,
    adminPassword,
    adminToken,
    userUsername,
    userPassword,
    userRemark,
    userCookie,
    userBind,
    wxpuserToken,
    wxpuserUid,
    wxpuserUidAdmin,
    notice,
    siteName,
    QingLong,
    isDecodeUsername,
    proxy,
    maxRetry,
    loginType,
    userPin
  }
})
