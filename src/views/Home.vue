<template>
    <div class="container">
        <div class="aside">
            <el-menu background-color="#545c64" class="menu" @select="handleSelect" text-color="#fff" router
                :default-active="actived">
                <div class="top">
                    <a>
                        <img class="top-logo" src="../assets/logo.png" />
                        <h1 class="top-title">鹿飞管理系统</h1>
                    </a>

                </div>
                <el-menu-item index="/home/dataBoard">
                    <el-icon>
                        <DataBoard />
                    </el-icon>
                    <span>控制台</span>
                </el-menu-item>
                <el-menu-item index="/home/setting">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>系统设置</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main">
            <div class="toggle">
                <el-icon class="toggle-icon" size="20">
                    <Fold />
                </el-icon>
                <span>{{ text }}</span>
            </div>
            <RouterView />
        </div>

    </div>
</template>

<script setup>

import Api from '@/utils/ReqUtils';
import {
    Document,
    Menu as IconMenu,
    Location,
    DataBoard,
    Setting,
    Fold
} from '@element-plus/icons-vue'
import { computed, ref, onBeforeMount } from 'vue';

const actived = "/home/dataBoard"

const current = ref("/home/dataBoard")

const handleSelect = (e) => {
    current.value = e
}
onBeforeMount(async () => {
    Api.getUserInfo().then(res => {
        console.log(res);

    })
})

const text = computed(() => {
    if (current.value === '/home/dataBoard') {
        return '控制台'
    } else if (current.value === '/home/setting') {
        return '系统设置'
    }

})

</script>


<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;

}

.toggle-icon {
    padding: 0px 15px;
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
}

.toggle span {
    color: #97a8be;
    cursor: text;
    vertical-align: middle;
    line-height: 50px;
    font-size: 14px;
}

.main {
    width: 100%;
}

.main .toggle {
    display: block;
    height: 50px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}

.aside {
    width: 200px;
    height: 100%;
}

.menu {
    width: 200px;
    height: 100%;
    background-color: rgb(48, 65, 86);
}

.top {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: rgb(48, 65, 86);
    text-align: center;
    overflow: hidden;
}

.top a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
}

.top-title {
    display: inline-block;
    margin: 0;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
}

.top-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 12px;
}
</style>