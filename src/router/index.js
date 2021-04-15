import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Dashboard from '../views/Dashboard.vue'
import humanResource from '../views/humanResource.vue'
import Finance from '../views/finance.vue'
import Truck from '../views/trucks.vue'
import Order from '../views/order.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/humanResource',
    name: 'humanResource',
    component: humanResource
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/trucks',
    name: 'Truck',
    component: Truck
  },
  {
    path: '/orders',
    name: 'Order',
    component: Order
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
