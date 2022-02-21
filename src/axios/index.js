import axios from "axios";
import store from "@/store/store";

let token = store.state.user.token;

if(!token) {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.token) {
    store.commit('LOGIN', user);
    token = user.token;
  }
}

const config = {
  baseUrl: "http://106.14.200.70:9000",
  timeout: 1000,
  headers: {
    Authorization: `Basic ${token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const api = axios.create(config);

// 默认 post 请求，使用 application/json 形式
api.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

const request = function (url, params, type) {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: config.baseUrl + url,
      params,
      headers: config.headers,
    }).then((res) => {
      resolve(res.data);
    });
  });
};

axios.interceptors.response.use(
  (res) => {
    if (res.data.code === 13000) {
      router.push({
        path: "/login",
        query: { redirect: router.history.current.fullPath },
      });
      return;
    }
    return res;
  },
  (error) => {
    //显示错误信息
    return Promise.reject(error.response.data);
  }
);

export const post = (url, params) => {
  return request(url, params, "post");
};

export const get = (url, params) => {
  return request(url, params, "get");
};
