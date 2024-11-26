import request from "./axios";
async function getUserInfo(data) {
    return await request({
        url: "/user/info",
        method: "post",
        headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
        data
    });
}
//login
async function getLoginToken(data) {
    return await request({
        url: "/user/login",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
}
async function getSiteConfig(data) {
    return await request({
        url: "/config",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data
    });
}
//APILOGIN
async function ApiLoginDo(data) {
    return await request({
        url: "/api/login/do",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
}
//APILOGINCHECK
async function ApiLoginCheck(data) {
    return await request({
        url: "/api/login/check",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
}
//更新数据
/**
 * 
 * @param {*} data 必须为对象 
 * @returns 
 */
async function updateConfig(data) {
    return await request({
        url: "/config/update",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
}
//用户绑定
/**
 * 
 * @param {*} data { username:xxxx,password:"",bind:{type:"QQ",params:xxxx } }
 * //传入用户名和密码防止被其他用户篡改
 * @returns 
 */
async function ApiBindSet(data) {
    return await request({
        url: "/api/bind",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
}


export {
    getUserInfo,//管理员接口 获取后台配置
    getLoginToken,//管理员登录接口
    getSiteConfig,//获取网站公告
    ApiLoginDo,//用户登录接口
    ApiLoginCheck,//用户检测登录状态接口
    updateConfig,//修改后台配置接口
    ApiBindSet,//用户绑定通知接口
}