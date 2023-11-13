import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingsView from '../views/BookingsView.vue'
import RequestsView from '../views/RequestsView.vue'
import TransfersView from '../views/TransfersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsView
  },
  {
    path: '/transfers',
    name: 'transfers',
    component: TransfersView
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsView
  },
  {
    path: '/tours',
    name: 'tours',
    // route level code-splitting
    // this generates a separate chunk (tours.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tours" */ '../views/ToursView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
