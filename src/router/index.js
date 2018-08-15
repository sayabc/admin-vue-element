import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/views/layout/Layout';

Vue.use(Router);

export const routersMap = [ // export stroe需要用到映射关系
  // { path: '/', component: () => import('../components/HelloWorld.vue') },
  // TODO: 添加一些页面 比如 login 401 403 500等，同时也需要同步下页面模板
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
    }],
  }, {
    path: '/test',
    component: Layout,
    redirect: 'test/index',
    children: [{
      path: 'test/test1',
      component: () => import('@/views/test/test1'),
      name: 'test1',
    }, {
      path: 'test/test2',
      component: () => import('@/views/test/test2'),
      name: 'test2',
    }],
  },
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
