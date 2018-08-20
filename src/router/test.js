import Layout from '@/views/layout/Layout';

const test = {
  path: '/test',
  component: Layout,
  redirect: 'test/index',
  meta: {
    keepAlive: true,
    title: 'document', // 用来在 navList显示
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
};

export default test;
