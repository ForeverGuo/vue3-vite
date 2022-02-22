import axios from "axios";
import store from "@/store/store";
import router from '@/router/router'
import { token } from '@/utils/common'


const config = {
  baseUrl: "http://106.14.200.70:9000",
  timeout: 1000,
  headers: {
    Authorization: `Basic ${token()}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const api = axios.create(config);

// 默认 post 请求，使用 application/json 形式
api.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

const request = function (url, params, type) {
  config.headers.Authorization = `Basic ${token()}`
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: config.baseUrl + url,
      params,
      headers: config.headers,
    }).then((res) => {
      if(res) {
        resolve(res.data);
      }
    });
  });
};

axios.interceptors.response.use(
  (res) => {
    if (res.data.code === 13000) {
      router.push({
        path: "/login",
        query: { redirect: router.currentRoute.value.fullPath },
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
