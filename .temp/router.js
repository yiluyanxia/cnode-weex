import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(Router)

module.exports = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
