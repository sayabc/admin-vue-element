import Layout from '@/views/layout/Layout';

const test = {
  path: '/errPage',
  component: Layout,
  redirect: 'errPage/index',
  meta: {
    keepAlive: true,
    title: 'errPage', // 用来在 navList显示
  },
  children: [{
    path: '/40x',
    component: () => import('@/views/errPage/40x'),
    name: '40x',
    meta: { title: '40x', icon: 'menu' },
  }, {
    path: '/50x',
    component: () => import('@/views/errPage/50x'),
    name: '50x',
    meta: { title: '50x', icon: 'setting' },
  }],
};

export default test;
