import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import store from '@/store/store'

const Home = () => import('@/page/home/index.vue')
const SubIndex = () => import('@/page/subs/SubIndex.vue')
const Login = () => import('@/page/login/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/subs/home'
  },
  {
    path: '/subs',
    name: 'SubIndex',
    component: Home,
    isElementPlus: true,
    redirect: '/subs/home',
    meta: {
      requireLogin: true
    },
    children: [
      {
        path: '/subs/home',
        name: 'SubHome',
        component: SubIndex,
        desc: '主页',
        icon: 'home-filled' 
      },
      {
        path: '/subs/home2',
        name: 'SubHome2',
        component: SubIndex,
        desc: '用户管理',
        icon: 'avatar'
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  let user = store.state.user.token;
  if (to.meta.requireLogin) {
    if (!user) {
      router.push({ path: '/login',query: { redirect: to.fullPath }})
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;