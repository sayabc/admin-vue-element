import Layout from '@/views/layout/Layout';

const dashboard = {
  path: '/',
  component: Layout,
  redirect: 'dashboard',
  meta: {
    keepAlive: true, // 组件需要被缓存
    title: 'dashboard', // 用来在 navList显示
  },
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: { title: 'dashboard', icon: 'location' },
  }],
};

export default dashboard;
