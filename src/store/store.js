import { createStore } from 'vuex';
import * as types from './types.js'


const store = createStore({
  state: {
    user: {
      token: '',
      // type 2: 管理员   type 1: 用户
      user_type: ''
    }
  },
  getters: {

  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.user.token = data.token;
      state.user.user_type = data.userType;
      localStorage.setItem('user', JSON.stringify(data));
    },
    [types.LOGOUT]: (state, data) => {
      state.user =  {
        token: '',
        user_type: ''
      };
      localStorage.removeItem('user');
    },
  },
  actions: {

  }
})

export default store;