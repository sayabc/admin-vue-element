import Layout from '@/views/layout/Layout';

const dashBoard = {
  path: '/',
  component: Layout,
  redirect: 'dashBoard',
  meta: {
    keepAlive: true, // 组件需要被缓存
    title: 'dashBoard', // 用来在 navList显示
  },
  children: [{
    path: 'dashBoard',
    component: () => import('@/views/dashBoard/index'),
    name: 'dashBoard',
    meta: { title: 'dashBoard', icon: 'location' },
  }],
};

export default dashBoard;
