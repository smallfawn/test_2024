<template>
    <div v-if="stores.loginType == 'admin'">
        系统管理
        当前版本:内测版
    </div>
    <div v-if="stores.loginType == 'user'">
        系统公告
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const stores = useCounterStore()
console.log(stores.loginType);

</script>