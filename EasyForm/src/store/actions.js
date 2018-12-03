import axios from 'axios';
import router from '../router';

axios.defaults.baseURL = 'http://168.168.5.103:8080';
axios.interceptors.request.use(config => {
    if (config.url.indexOf("login") === -1) {
      config.url += (config.baseURL.indexOf("?") === -1 || config.url.indexOf("?") === -1) ? '?' : '&';
      config.url += `token=${localStorage.getItem("token")}`;
    }
    return config;
  }
);
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401 && error.response.config.url.indexOf("login") === -1) {
    router.push({path: "/login"});
  }
  return Promise.reject(error);
});

export default {
  async login({commit}, {username, password}) {
    try {
      let {data: {token, userId}} = await axios.post('/login', `username=${username}&password=${password}`);
      commit("saveUserInfo", {token, userId, username});
      return {status: true, message: "登录成功"}
    } catch (e) {
      let message = e.message === "Network Error" ? "网络错误" : "用户名或密码错误";
      return {status: false, message};
    }


  },
  async saveRawPage(context, payload) {
    try {
      await axios.post('/easyform/saveform', payload);
      return {status: true, message: "保存成功"};
    } catch (e) {
      return {status: false, message: "保存失败"};
    }
  }
}
