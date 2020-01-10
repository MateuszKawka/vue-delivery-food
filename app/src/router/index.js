import Vue from 'vue'
import VueRouter from 'vue-router'
import AddressView from '../views/AddressView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AddressView
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RestaurantsListView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
