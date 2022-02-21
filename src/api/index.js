import { get, post } from '@/axios/index';

// 登陆接口
export const userLogin = (params) => {
  return post('/gelvsheng/userManager/userLogin', params);
}

// 管理员展示数据
export const adminList = (params) => {
  return post('/gelvsheng/clinical/adminClinicalPage', params)
}

// 用户展示数据
export const userList = (params) => {
  return post('/gelvsheng/clinical/customerGetClinucalPage', params)
}

