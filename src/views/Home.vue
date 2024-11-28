<template>
    <div class="container">
        <div :class="['aside']">
            <el-menu background-color="#545c64" class="menu" @select="handleSelect" text-color="#fff" router
                :collapse="activedMenu" :default-active="actived">
                <div class="top">
                    <a>
                        <img class="top-logo" src="../assets/logo.png" />
                        <h1 class="top-title">Lufly Center</h1>
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
                <el-icon class="toggle-icon" size="20" @click="changeActive">
                    <Fold />
                </el-icon>
                <div class="logout-btn-wrapper"> <!-- 新增包裹按钮的容器，方便后续样式调整 -->
                    <el-button type="danger" @click="logout">退出登录</el-button> <!-- 新增退出登录按钮，设置类型为危险（红色） -->
                </div>
                <span>{{ text }}</span>
            </div>
            <RouterView />
        </div>

    </div>
</template>

<script setup>

import {
    Document,
    Menu as IconMenu,
    Location,
    DataBoard,
    Setting,
    Fold
} from '@element-plus/icons-vue'
import { computed, ref, onBeforeMount } from 'vue';
import { useRouter } from "vue-router"
import Api from '@/utils/ReqUtils';
import { ElMessage } from 'element-plus'
const router = useRouter()
let activedMenu = ref(false)
const changeActive = () => {
    activedMenu.value = !activedMenu.value
}

const actived = "/home/dataBoard"

const current = ref("/home/dataBoard")

const handleSelect = (e) => {
    current.value = e
}

const logout = () => {
    localStorage.removeItem('token')
    ElMessage({
        message: '退出成功',
        type: 'success'
    })
    console.log("执行退出登录操作");
}
onBeforeMount(async () => {
    if (localStorage.getItem('token')) {

    } else {
        ElMessage({
            message: '请重新登录',
            type: 'warning'
        })
        //请重新登录
        router.push({
            name: 'main'
        })
    }
})

const text = computed(() => {
    if (current.value === '/home/dataBoard') {
        return '控制台'
    } else if (current.value === '/home/setting') {
        return '系统设置'
    }

})

</script>
<style>
.menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.logout-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    /* 使其靠右显示 */
    padding: 10px;
    /* 根据需求调整内边距 */
}

.el-button--danger {
    background-color: rgba(77, 77, 187, 0.774);
    /* 确保按钮为红色，可根据设计微调颜色值 */
    border-color: rgba(77, 77, 187, 0.774);
    /* 边框颜色与背景一致 */
}
</style>


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
    /* width: 200px; */
    height: 100%;
}

.aside-active {
    width: 50px;
}

.aside-active .menu {
    width: 50px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.menu {
    /* width: 200px; */
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