import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pin from '../views/Pin.vue'
import Sports from '../views/Sports.vue'
import Artists from '../views/Artists.vue'
import Search from '../views/Search.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Pin
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
