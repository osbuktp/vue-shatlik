import Main from './views/Main/Main.vue';
import About from './views/About/About.vue';
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