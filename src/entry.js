/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
const filters = require('@/config/filters')
// const store = require('@/store')
import store from '@/store'
/* eslint-disable no-new */

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器

new Vue(Vue.util.extend({
  el: '#root',
  router,
  store
}, App));
router.push('/');