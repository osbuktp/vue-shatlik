import VueRouter from 'vue-router';

import MainPage from './views/MainPage.vue';
import AboutPage from './views/AboutPage.vue';
import StaffPage from './views/StaffPage.vue';
import RoomsPage from './views/RoomsPage.vue';
import ServicesPage from './views/ServicesPage.vue';
import RatesPage from './views/RatesPage.vue';
import ContactsPage from './views/ContactsPage.vue';

let router = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage },
    { path: '/staff', component: StaffPage },
    { path: '/rooms', component: RoomsPage },
    { path: '/services', component: ServicesPage },
    { path: '/rates', component: RatesPage },
    { path: '/contacts', component: ContactsPage },
  ]
});

export default router;