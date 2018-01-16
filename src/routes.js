import Main from './views/Main/Main.vue';
import About from './views/About/About.vue';
import AboutConditions from './views/About/Conditions/Conditions.vue';
import AboutRules from './views/About/Rules/Rules.vue';
import Services from './views/Services/Services.vue';
import ServicesAmount from './views/Services/Amount/Amount.vue';
import ServicesComplaints from './views/Services/Complaints/Complaints.vue';
import ServicesConditions from './views/Services/Conditions/Conditions.vue';
import ServicesSpots from './views/Services/Spots/Spots.vue';
import Activities from './views/Activities/Activities.vue';
import Events from './views/Events/Events.vue';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/about/conditions',
        component: AboutConditions
    },
    {
        path: '/about/rules',
        component: AboutRules
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/services/conditions',
        component: ServicesConditions
    },
    {
        path: '/services/amount',
        component: ServicesAmount
    },
    {
        path: '/services/spots',
        component: ServicesSpots
    },
    {
        path: '/services/complaints',
        component: ServicesComplaints
    },
    {
        path: '/activities',
        component: Activities
    },
    {
        path: '/events',
        component: Events
    }
];

export default routes;