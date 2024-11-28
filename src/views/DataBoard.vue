<template>
  <div class="container" v-if="stores.loginType == 'user'">
    <div class="qrcode">
      <div style="text-align: center;">WXPUSHER二维码</div>
      <img src="" alt="" srcset="" id="qrcode">
    </div>
    <el-form label-width="200px" style="margin-top: 70px;">
      <el-form-item label="备注">
        <el-input v-model="stores.userRemark" style="width: 400px;" />
      </el-form-item>
      <el-form-item label="京东用户名">
        <el-input readonly disabled v-model="stores.userPin" style="width: 400px;" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%;margin-top: 50px;" size="large">点击更新</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div v-if="stores.loginType == 'admin'">
    <el-table :data="adminDataList"  style="width: 100%">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="ptpin" label="京东用户名（ptpin）"></el-table-column>
      <el-table-column prop="fp" label="指纹（fp）"></el-table-column>
      <el-table-column prop="notify.type" label="通知类型"></el-table-column>
      <el-table-column prop="notify.params" label="通知ID"></el-table-column>
      <el-table-column prop="risk.num" label="风险数量"></el-table-column>
      <el-table-column prop="risk.time" label="风险时间"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
import Api from '@/utils/ReqUtils';
const stores = useCounterStore()
const wxpusherQrcode = ref("data:image/png;base64,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")
const adminDataList = ref([])

if (stores.loginType == 'user') {
  Api.getUserInfo().then(res => {
    console.log(res.data);

    stores.userRemark = res.data.data.remark
    stores.userPin = res.data.data.ptpin
  })
  onMounted(() => {

    document.getElementById("qrcode").src = wxpusherQrcode.value
  })
}
if (stores.loginType == 'admin') {
  Api.getAdminData().then(res => {
    console.log(res.data.data);
    adminDataList.value = res.data.data;
  })
}


</script>

<style scoped>
.container {
  display: flex;
  width: 85%;
  margin: 30px auto;
}

.qrcode {
  /* width: 100%; */
}
</style>
