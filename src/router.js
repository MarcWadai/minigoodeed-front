import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import Donation from './views/Donation.vue'
import Association from './views/Association.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        guest: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        guest: true
      }
    },
    {
      path: '/project',
      name: 'projectDetail',
      component: ProjectDetail,
      props: true,
      meta: {
        guest: true
      }
    },
    {
      path: '/assos',
      name: 'assos',
      component: Association,
      props: true,
      meta: {
        guest: true
      }
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('jwt') === null || localStorage.getItem('jwt') === undefined) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }
  next()
  // console.log('to', to)
  // console.log('localStorage.getItem', localStorage.getItem('jwt'))
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (localStorage.getItem('jwt') == null) {
  //     next({
  //       path: '/login',
  //       params: { nextUrl: to.fullPath }
  //     })
  //   }
  // } else if (to.matched.some(record => record.meta.guest)) {
  //   if (localStorage.getItem('jwt') === null) {
  //     next()
  //   } else {
  //     next({ name: 'home' })
  //   }
  // } else {
  //   next()
  // }
})

export default router
