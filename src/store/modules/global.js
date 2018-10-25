// global功能模块
import { routersMap, defaultSideBar } from '@/router';

const global = {
  state: {
    sidebar: {
      open: true, // 默认展开sidebar
      showList: defaultSideBar, // defalut is dashBoard
    },
    permissionRouters: routersMap, // 需要做下处理: 去重 title 路由等
    // hasLogin: false, // 是否已经登录
    enterSiteStyle: 'register_style', // 登录网站的方式  login_style  register_style
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    HANDLE_SIDEBAR_LIST: (state, data) => {
      const arr = state.permissionRouters.find(item => item.meta.title === data);
      state.sidebar.showList = [arr][0];
    },
    CHANGE_ENTER_SITE_STYLE: (state, data) => {
      state.enterSiteStyle = data;
      console.log('data', state.enterSiteStyle);
    },
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    handleSidebarList: ({ commit }, data) => {
      commit('HANDLE_SIDEBAR_LIST', data);
    },
    changeEnterSiteStyle: ({ commit }, data) => {
      console.log(data);
      commit('CHANGE_ENTER_SITE_STYLE', data);
    },
  },

};

export default global;
