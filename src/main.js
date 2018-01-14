import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes.js';

import Bulma from 'bulma';


Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
