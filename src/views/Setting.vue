<template>
    <div v-if="stores.loginType == 'admin'">
        <el-form label-width="200px" style="margin-top: 70px;">
            <el-form-item label="Token">
                <el-input readonly disabled v-model="adminCofing.token" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="API地址">
                <el-input v-model="adminCofing.api" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="jsfp">
                <el-input v-model="adminCofing.jsfp" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="jseid">
                <el-input v-model="adminCofing.jseid" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="面板信息">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="qlConifg.url" placeholder="ql URL" style="width: 100%;" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="qlConifg.appid" placeholder="ql Appid" style="width: 100%;" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="qlConifg.secret" placeholder="ql Secret" style="width: 100%;" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="maxRetry">
                <el-input v-model="adminCofing.maxRetry" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="isDecodeUsername">
                <el-input v-model="adminCofing.isDecodeUsername" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="siteName">
                <el-input v-model="adminCofing.siteName" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="notice">
                <el-input v-model="adminCofing.notice" style="width: 400px;" />
            </el-form-item>
            <el-form-item label="WXPUSHER">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="wxpuserConfig.token" placeholder="wxpuserToken" style="width: 100%;" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="wxpuserConfig.uid" placeholder="wxpuserUid" style="width: 100%;" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="" style="width: 100%;margin-top: 50px;" size="large">点击更新</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div v-if="stores.loginType == 'user'">
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const stores = useCounterStore()
console.log(stores.loginType);
import Api from '@/utils/ReqUtils'
import { onMounted, ref } from 'vue'
const adminCofing = ref({})
const qlConifg = ref({})
const wxpuserConfig = ref({})
if (stores.loginType == 'admin') {
    Api.getAdminInfo().then(res => {
        console.log(res.data);
        if (res.data.code == 0) {
            adminCofing.value = res.data.data
            qlConifg.value = res.data.data.ql
            wxpuserConfig.value = res.data.data.wxpuser
        }
    })
}


</script>