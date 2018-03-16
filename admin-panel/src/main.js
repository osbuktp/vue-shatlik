import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes.js';

import Bulma from 'bulma';

import config from './config.js'

Vue.use(VueResource);
Vue.http.options.credentials = true


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == '/') next()
  let authStatus;
  Vue.http.get(`${config.BASEURL}/auth`)
  .then(res => res.json())
  .then(data => {
    authStatus = data.auth
    console.log(authStatus)
    if (authStatus) next()
    else next('/')
  })
  .catch(err => {
    console.log(err)
    next('/')
  })
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
