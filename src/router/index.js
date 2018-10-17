import Vue from 'vue';
import Router from 'vue-router';

// 各个模块分配
import dashboard from './dashboard';
import test from './test';

Vue.use(Router);

export const defaultSideBar = dashboard;

export const routersMap = [
  dashboard,
  test,
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
