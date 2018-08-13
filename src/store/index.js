import Vue from 'vue';
import Vuex from 'vuex';

// 单个 stroe 模块
import global from './modules/global';

// 单个 store模块 state的汇总
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
  },
  getters,
});
