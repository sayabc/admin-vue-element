import Vue from 'vue';
import Router from 'vue-router';

// 各个模块分配
import welcome from './welcome';
import dashBoard from './dashboard';
import errPage from './errPage';
import components from './components';

Vue.use(Router);

export const defaultSideBar = dashBoard;

export const routersMap = [
  welcome,
  dashBoard,
  errPage,
  components,
];
// routersMap 的数组顺序决定了sidebar的显示顺序
export default new Router({
  // mode: 'history',
  routes: routersMap,
});
