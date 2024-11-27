import axios from 'axios';
/*api封装*/
const Api = {
    // 获取用户信息
    getUserInfo(params = '') {
        return axios.post('/api/user/info', { params }, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
    },

    // 用户登录
    login(username, password) {
        return axios.post('/api/user/login', { username, password });
    },

    // 获取站点配置 传入{username:"",password:""} 返回{code:0,msg:"排队成功",data:username}
    getConfig(params = '') {
        return axios.post('/api/config', { params });
    },

    // 排队登录
    queueLogin(username, password) {
        return axios.post('/api/login/do', { username, password });
    },

    // 检查排队状态
    checkQueueStatus(username) {
        return axios.post('/api/login/check', { username });
    },

    // 更新站点配置
    updateConfig(data) {
        return axios.post('/api/config/update', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    },


    bindAccount(username, password, bindType, bindParams) {
        return axios.post('/api/bind', {
            username,
            password,
            bind: { type: bindType, params: bindParams },
        });
    },
};

export default Api;