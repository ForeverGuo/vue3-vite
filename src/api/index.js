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

// 用户管理数据
export const userManager = (params) => {
  return post('/gelvsheng/userManager/userPage', params)
}

// 管理员用户 创建新用户
export const creataManageUser = (params) => {
  return post('/gelvsheng/userManager/createUser', params)
}

// 添加新客户
export const addClinucal = (params) => {
  return post('/gelvsheng/clinical/addClinucal', params)
}

// 导出数据
export const exportClinical = (params) => {
  return get('/gelvsheng/clinical/exportClinical', params)
}
