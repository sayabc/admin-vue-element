import Vue from 'vue';

import '@/styles/index.scss';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 样式应该提前引入

import App from './App';
import router from './router';
import store from './store';


Vue.use(Element, {
  size: 'medium',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
