/*global Vue*/
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '@/views/Home'
import Detail from '@/views/Detail'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
