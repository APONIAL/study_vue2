import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routerAbout from "@/components/RouterAbout";
import routerHome from "@/components/RouterHome";
import routerHomeNews from "@/components/RouterHomeNews"
import routerHomeMessage from "@/components/RouterHomeMessage";
import RouterHomeMessageDetail from "@/components/RouterHomeMessageDetail";

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
    },
    {
        path: '/chapter6',
        name: 'chapter6',
        component: () => import('@/views/chapter6.vue')
    },
    {
        path: '/chapter7',
        name: 'chapter7',
        component: () => import('@/views/chapter7.vue')
    },
    {
        path: '/chapter8',
        name: 'chapter8',
        component: () => import('@/views/chapter8.vue')
    },
    {
        path: '/chapter9',
        name: 'chapter9',
        component: () => import('@/views/chapter9.vue'),
        children: [
            {
                path: 'chapter9-about',
                name: 'chapter9-about',
                component: routerAbout
            },
            {
                path: 'chapter9-home',
                name: 'chapter9-home',
                component: routerHome,
                children: [
                    {
                        path: 'news',
                        name: 'news',
                        meta: {isAuth: true, title: 'news'},
                        component: routerHomeNews,
                        beforeEnter(to, from, next) {
                            if (to.meta.isAuth) {
                                if (localStorage.getItem('token') === 'admin') {
                                    next()
                                } else {
                                    alert('请在localStorage中设置token为admin')
                                    next('/')
                                }
                            } else {
                                next()
                            }
                        }

                    },
                    {
                        path: 'message',
                        name: 'message',
                        meta: {isAuth: true, title: 'message'},
                        component: routerHomeMessage,
                        children: [
                            {
                                // path: 'detail/:id/:title',
                                path: 'detail',
                                name: 'xiangqing',
                                component: RouterHomeMessageDetail,
                                // props的第一种写法,值为对象,该对象的key-value会以props的形式传给detail组件
                                // props:{a:1,b:'hello'}
                                // props的第二种写法,值为布尔值,若布尔值为真,
                                // 就会把该路由组件收到的所有params参数,以props的形式传给detail组件
                                //   props:true
                                //  props的第三种写法,值为函数
                                props({query: {id, title}}) {
                                    return {id, title, a: 100}
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }

]
const originalPush = VueRouter.prototype.push
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: 'history',
    routes
})
//全局前置路由守卫——初始化的时候被调用，每次路由切换之前被调用
/*
router.beforeEach((to, from, next) => {
    console.log('to=>', to, ",from=>", from)
    if (to.meta.isAuth) {
        if (localStorage.getItem('token') === 'admin') {
            next()
        } else {
            alert('请在localStorage中设置token为admin')
            next('/')
        }
    } else {
        next()
    }
})
*/

//全局后置路由守卫——初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'vue-router'
    console.log('to=>', to, ",from=>", from)
})

export default router
