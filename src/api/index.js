import { get, post } from '@/axios/index';

export const userLogin = (params) => {
  return post('/gelvsheng/userManager/userLogin', params);
}