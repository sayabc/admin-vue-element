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
    meta: {
      keepAlive: true, // 组件需要被缓存
    },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'location' },
    }],
  }, {
    path: '/test',
    component: Layout,
    redirect: 'test/index',
    meta: {
      keepAlive: true,
    },
    children: [{
      path: '/test1',
      component: () => import('@/views/test/test1'),
      name: 'test1',
      meta: { title: 'test1', icon: 'menu' },
    }, {
      path: '/test2',
      component: () => import('@/views/test/test2'),
      name: 'test2',
      meta: { title: 'test2', icon: 'setting' },
    }],
  },
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
