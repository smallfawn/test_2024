import { getAdminInfo } from '@/assets/request';
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
    getAdminData(params = '') {
        return axios.post('/api/admin/data', { params }, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
    },

    // 用户登录
    adminLogin(username, password) {
        return axios.post('/api/admin/login', { username, password });
    },

    // 更新站点配置
    updateAdminConfig(data) {
        return axios.post('/api/admin/config/update', data, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
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

    // 获取用户信息
    getUserInfo(params = '') {
        return axios.post('/api/user/info', { params }, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
    },
    updateUserConfig(data) {
        return axios.post('/api/user/config/update', data, {
            headers: {
                token: `${localStorage.getItem('token')}`,
            },
        });
    },

    bindAccount(bindType, bindParams) {
        //考虑Headers带Token 而不是直接传入用户名和密码
        return axios.post('/api/user/bind', {
            bind: { type: bindType, params: bindParams },

        },
            {
                headers: {
                    token: `${localStorage.getItem('token')}`,
                },
            }
        );

    },
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

export default Api;