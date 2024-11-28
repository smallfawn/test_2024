<template>
    <div v-if="stores.loginType == 'admin'">
        系统管理
        当前版本:内测版
        管理admin/userinfo返回
    </div>
    <div v-if="stores.loginType == 'user'">
        系统公告
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const stores = useCounterStore()
console.log(stores.loginType);
import Api from '@/utils/ReqUtils'
import { onMounted } from 'vue'
if (stores.loginType == 'admin') {
    Api.getAdminInfo().then(res => {
        console.log(res.data);
        if (res.data.code == 0) {

        }

    })
}

</script>