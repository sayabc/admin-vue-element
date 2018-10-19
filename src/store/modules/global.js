// global功能模块
import { routersMap, defaultSideBar } from '@/router';

const global = {
  state: {
    sidebar: {
      open: true, // 默认展开sidebar
      showList: defaultSideBar, // defalut is dashBoard
    },
    permissionRouters: routersMap, // 需要做下处理: 去重 title 路由等
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    HANDLE_SIDEBAR_LIST: (state, data) => {
      const arr = state.permissionRouters.find(item => item.meta.title === data);
      state.sidebar.showList = [arr][0];
    },
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    handleSidebarList: ({ commit }, data) => {
      commit('HANDLE_SIDEBAR_LIST', data);
    },
  },

};

export default global;
