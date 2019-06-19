import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./pages/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login.vue')
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import('./pages/Manager.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/planet/:planetId',
      name: 'planet-id',
      component: () => import('./pages/Planet.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./pages/Orders.vue'),
      beforeEnter: requireAuth
    }
  ]
})

function requireAuth (to, from, next) {
  if (store.state.account.isMasterJedi) {
    next()
  } else {
    next('/login')
  }
}
