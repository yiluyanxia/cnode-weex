import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '@/views/Home'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
