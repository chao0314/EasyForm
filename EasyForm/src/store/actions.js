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
  let res = error.response;
  if (res && res.status === 401 && res.config.url.indexOf("login") === -1) {
    router.push({path: "/login"});
  } else if (res && res.config.url.indexOf("login") !== -1) {
    return Promise.reject(error);
  } else {
    router.push({path: "/error"});
  }
});

export default {
  async login({commit}, {username, password}) {
    try {
      let {data: {token, userId}} = await axios.post('/login', `username=${username}&password=${password}`);
      commit("saveUserInfo", {token, userId, username});
      return {status: true, message: "登录成功"}
    } catch (e) {
      let message = e.response && e.response.status === 401 ? "用户名或密码错误" : "网络错误";
      return {status: false, message};
    }
  },
  async saveRawPage({commit}, payload) {

    let {data} = await axios.post('/easyform/saveform', payload);
    commit("saveFormUrl", {formUrl: `${axios.defaults.baseURL}${data}`});
    return {status: true, message: "保存成功"};
  },
  async getFormInstances({state}) {
    let {data} = await axios.get(`/easyform/getforminstancelist/${state.userInfo.userId}`);
    let res = [];
    data.forEach((v) => {
      res.push({instanceId: v.instanceid, instanceName: v.original.instanceName})
    });
    return res;

  },
  async getInstanceInfoById({commit}, payload) {
    // console.log((await axios.get(`/easyform/getattributebyinstanceid/${payload.instanceId}`)).data);
    // console.log((await axios.get(`/easyform/getresultbyinstanceid/${payload.instanceId}`)).data);
    // let {componment: components, formSettings, publishSettings, url: formUrl} = (await axios.get(`/easyform/getattributebyinstanceid/${payload.instanceId}`)).data;
    // commit("saveInstanceInfo", {components, formSettings, publishSettings, formUrl:`${axios.defaults.baseURL}${formUrl}`});
  }
}
