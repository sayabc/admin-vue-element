// global功能模块
import { routersMap } from '@/router';

const global = {
  state: {
    sidebar: {
      open: true, // 默认展开sidebar
    },
    permissionRouters: routersMap,
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
  },

};

export default global;
