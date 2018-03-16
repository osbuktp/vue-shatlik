import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes.js';

import Bulma from 'bulma';


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  linkExactActiveClass: "is-active"
  // mode: 'history'
});

Vue.use(VueResource);

Vue.filter('toDate', function (date) {
  date = new Date(date);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
