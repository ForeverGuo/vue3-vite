import { createStore } from 'vuex';
import * as types from './types'

const store = createStore({
  state: {
    user: {
      token: 'a937cfd0-67ed-47b7-831e-c8c7f17421c5',
      // type 2: 管理员   type 1: 用户
      user_type: 2
    }
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.user = Object.assign({}, data);
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