import Login from '@/views/login/index';

const login = {
  path: '/',
  component: Login,
  redirect: 'login',
  meta: {
    keepAlive: true, // 组件需要被缓存
    title: 'login', // 用来在 navList显示
  },
  children: [{
    path: 'login',
    component: () => import('@/views/login/index'),
    name: 'login',
    meta: { title: 'login', icon: 'location' },
  }],
};

export default login;
