import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes.js';

import lightbox from 'vlightbox';
Vue.use(lightbox);

import Bulma from 'bulma';


Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // mode: 'history'
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
