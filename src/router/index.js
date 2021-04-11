import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pin from '../views/Pin.vue'
import Sport from '../views/Sport.vue'
import Food from '../views/Food.vue'
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
    path: '/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
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
