import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Movies_page from '../views/Movies_page.vue'
import About from '../views/About.vue'





const routes = [
  {
    path: '/Details/:id',
    name: 'Details',
    component: Details,
    props :true
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/Movies_page',
    name: 'Movies_page',
    component: Movies_page

    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
