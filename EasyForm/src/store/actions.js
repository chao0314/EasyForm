import axios from 'axios';
import router from '../router';

axios.defaults.baseURL = 'http://172.22.247.104:8080';
//axios.defaults.baseURL = "http://localhost:3000";
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
      let {data: {token}} = await axios.post('/login', `username=${username}&password=${password}`);
      commit("saveUserInfo", {token, username});
      return {status: true, message: "登录成功"}
    } catch (e) {
      let message = e.message === "Network Error" ? "网络错误" : "用户或密码错误";
      return {status: false, message};
    }


  },
  async saveRawPage(context, payload) {
    try {
      console.log(payload)
      await axios.post('/easyform/saveform', payload);
      return {status: true, message: "保存成功"};
    } catch (e) {
      return {status: false, message: "保存失败"};
    }
  }
}
