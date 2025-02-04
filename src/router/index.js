import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/chapter1.vue')
  },
  {
    path: '/chapter2',
    name: 'chapter2',
    component: () => import('../views/chapter2.vue')
  },
  {
    path: '/chapter3',
    name: 'chapter3',
    component: () => import('../views/chapter3.vue')
  },
  {
    path: '/chapter4',
    name: 'chapter4',
    component: () => import('../views/chapter4.vue')
  },
  {
    path: '/chapter5',
    name: 'chapter5',
    component: () => import('../views/chapter5.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
