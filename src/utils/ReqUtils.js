import axios from 'axios';
/*api封装*/
const Api = {
    // 获取用户信息
    getAdminInfo(params = '') {
        return axios.post('/api/admin/info', { params }, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
    },

    // 用户登录
    adminLogin(username, password) {
        return axios.post('/api/admin/login', { username, password });
    },

    // 获取站点配置 传入{username:"",password:""} 返回{code:0,msg:"排队成功",data:username}
    getConfig(params = '') {
        return axios.post('/api/config', { params });
    },

    // 排队登录
    queueLogin(username, password) {
        return axios.post('/api/user/login/do', { username, password });
    },

    // 检查排队状态
    checkQueueStatus(username) {
        return axios.post('/api/user/login/check', { username });
    },

    // 更新站点配置
    updateConfig(data) {
        return axios.post('/api/admin/config/update', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    },


    bindAccount(username, password, bindType, bindParams) {
        return axios.post('/api/user/bind', {
            username,
            password,
            bind: { type: bindType, params: bindParams },
        });
    },
    wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

export default Api;