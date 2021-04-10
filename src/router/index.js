import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pinned from '../views/Pinned.vue'
import Sports from '../views/Sports.vue'
import Artists from '../views/Artists.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pinned',
    name: 'Pinned',
    component: Pinned
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
