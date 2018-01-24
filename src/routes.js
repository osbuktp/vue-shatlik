import Main from './views/Main/Main.vue';

import About from './views/About/About.vue';
import AboutConditions from './views/About/Conditions/Conditions.vue';
import AboutRules from './views/About/Rules/Rules.vue';
import AboutLead from './views/About/Lead/Lead.vue';
import AboutStaff from './views/About/Staff/Staff.vue';
import AboutDocuments from './views/About/Documents/Documents.vue';
import AboutEquipment from './views/About/Equipment/Equipment.vue';

import Services from './views/Services/Services.vue';
import ServicesRates from './views/Services/Rates/Rates.vue';
import ServicesExperience from './views/Services/Experience/Experience.vue';
import ServicesAmount from './views/Services/Amount/Amount.vue';
import ServicesComplaints from './views/Services/Complaints/Complaints.vue';
import ServicesConditions from './views/Services/Conditions/Conditions.vue';
import ServicesSpots from './views/Services/Spots/Spots.vue';

import Activities from './views/Activities/Activities.vue';
import ActivitiesReports from './views/Activities/Reports/Reports.vue';
import ActivitiesExams from './views/Activities/Exams/Exams.vue';
import ActivitiesRating from './views/Activities/Rating/Rating.vue';

import Events from './views/Events/Events.vue';

import Interrogation from './views/Interrogation/Interrogation.vue';


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
        path: '/about/lead',
        component: AboutLead
    },
    {
        path: '/about/staff',
        component: AboutStaff
    },
    {
        path: '/about/documents',
        component: AboutDocuments
    },
    {
        path: '/about/equipment',
        component: AboutEquipment
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/services/rates',
        component: ServicesRates
    },
    {
        path: '/services/experience',
        component: ServicesExperience
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
        path: '/activities/reports',
        component: ActivitiesReports
    },
    {
        path: '/activities/exams',
        component: ActivitiesExams
    },
    {
        path: '/activities/rating',
        component: ActivitiesRating
    },
    {
        path: '/events',
        component: Events
    },
    {
        path: '/interrogation',
        component: Interrogation
    }
];

export default routes;