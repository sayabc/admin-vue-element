import Login from '@/views/welcome/index';

const welcome = {
  path: '/',
  component: Login,
  redirect: 'welcome',
  meta: {
    keepAlive: true, // 组件需要被缓存
    title: 'welcome', // 用来在 navList显示
  },
  children: [{
    path: 'welcome',
    component: () => import('@/views/welcome/index'),
    name: 'welcome',
    meta: { title: 'welcome', icon: 'location' },
  }],
};

export default welcome;
