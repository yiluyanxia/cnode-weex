/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');

// import '@/assets/css/styles.css'
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App));
router.push('/');

