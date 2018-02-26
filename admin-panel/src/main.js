import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes.js';

import Bulma from 'bulma';


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == '/') next()
  let authStatus;
  fetch('https://shatlik-staging.herokuapp.com/auth')
  .then(res => res.json()).then(data => authStatus = data.auth)
  .catch(err => {
    console.log(err)
    authStatus = false
  })
  if (authStatus) next()
  else next('/')
})

Vue.use(VueResource);
Vue.http.options.credentials = true

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
