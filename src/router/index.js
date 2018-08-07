import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const routersMap = [
  { path: '/', component: () => import('../components/HelloWorld.vue') },
];

export default new Router({
  mode: 'history',
  routes: routersMap,
});
