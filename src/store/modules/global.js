// 单一功能模块
const global = {
  state: {
    sidebar: {
      open: true, // 默认展开sidebar
    },
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
