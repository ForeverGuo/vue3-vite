import { createStore } from 'vuex';
import * as types from './types'

const store = createStore({
  state: {
    token: 'a937cfd0-67ed-47b7-831e-c8c7f17421c5'
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.token = data;
      localStorage.setItem('token', data);
    },
    [types.LOGOUT]: (state, data) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {

  }
})

export default store;