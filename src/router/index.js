import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/views/layout/Layout';

Vue.use(Router);

const routersMap = [
  { path: '/', component: () => import('../components/HelloWorld.vue') },
  {
    path: '/test',
    component: Layout,
  },
];

export default new Router({
  // mode: 'history',
  routes: routersMap,
});
