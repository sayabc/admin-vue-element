import Vue from 'vue';
import Router from 'vue-router';

// 各个模块分配
import login from './login';
import dashBoard from './dashBoard';
import errPage from './errPage';

Vue.use(Router);

export const defaultSideBar = dashBoard;

export const routersMap = [
  dashBoard,
  errPage,
  login,
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
