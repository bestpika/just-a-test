import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home.vue')
const Input = () => import('../views/Input.vue')

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Input',
    component: Input
  }]
})

export default router
