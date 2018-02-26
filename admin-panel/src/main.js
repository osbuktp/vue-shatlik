import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes.js';

import Bulma from 'bulma';

Vue.use(VueResource);
Vue.http.options.credentials = true


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == '/') next()
  let authStatus;
  Vue.http.get('https://shatlik-staging.herokuapp.com/auth')
  .then(res => res.json())
  .then(data => authStatus = data.auth)
  .catch(err => {
    console.log(err)
    authStatus = false
  })
  console.log(authStatus)
  if (authStatus) next()
  else next('/')
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
