import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import store from '@/store/store'
import { token } from '@/utils/common'

const Home = () => import('@/page/home/index.vue')
const SubIndex = () => import('@/page/subs/SubIndex.vue')
const SubMember = () => import('@/page/subs/SubMember.vue')
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
        path: '/subs/member',
        name: 'SubMember',
        component: SubMember,
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
  let user = token();
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