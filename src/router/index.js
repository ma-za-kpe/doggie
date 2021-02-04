import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check auth state
    let user = firebase.auth().currentUser
    if (user) {
      //go to route
      next()
    } else {
      next({
        name: 'Home'
      })
    }
  } else {
    next()
  }
})

export default router
