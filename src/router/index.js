import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginComponent from "../views/login.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
        name: "login"
    }
},
{
    path: "/login",
    name: "login",
    component: LoginComponent
},
{
    path: "/home",
    name: "home",
    component: Home
},
{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
