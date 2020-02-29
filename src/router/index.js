import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Logout from '../views/Logout'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-debugger
  debugger
  if (store.getters.initalized) {
    return next()
  } else if (to.fullPath === '/?loggedIn' || store.state.userId) {
    initalizeApp(store, to, next)
  } else if (to.meta.allowAnonymous) { next() } else {
    router.push('/login')
  }
})
function initalizeApp (store, route, next) {
  fetch('/api/me').then(res => res.json()).then(
    user => {
      store.commit('setUser', user.id)
      route.fullPath === '/?loggedIn' || route.fullPath === '/login' ? next({ path: '/', replace: true }) : next()
    }
  )
}
export default router
