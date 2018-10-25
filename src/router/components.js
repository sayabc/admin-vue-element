import Layout from '@/views/layout/Layout';

const test = {
  path: '/components',
  component: Layout,
  redirect: 'components',
  meta: {
    keepAlive: true,
    title: 'components', // 用来在 navList显示
  },
  children: [{
    path: '/componentsIndex',
    component: () => import('@/views/components/index'),
    name: '组件中心',
    meta: { title: 'index', icon: 'menu' },
  },
  {
    path: '/editor',
    component: () => import('@/views/components/editor'),
    name: '富文本编辑器',
    meta: { title: 'editor', icon: 'menu' },
  }],
};

export default test;
