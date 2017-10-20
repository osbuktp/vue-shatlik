import MainPage from './views/Main/MainPage.vue';
import AboutPage from './views/About/AboutPage.vue';
import StaffPage from './views/Staff/StaffPage.vue';
import RoomsPage from './views/Rooms/RoomsPage.vue';
import ServicesPage from './views/Services/ServicesPage.vue';
import RatesPage from './views/Rates/RatesPage.vue';
import ContactsPage from './views/Contacts/ContactsPage.vue';
import Common from './views/About/Common.vue';
import Conditions from './views/About/Conditions.vue';
import Rules from './views/About/Rules.vue';
import Domestic from './views/Services/Domestic.vue';
import Medical from './views/Services/Medical.vue';
import Educational from './views/Services/Educational.vue';
import Labor from './views/Services/Labor.vue';
import Legal from './views/Services/Legal.vue';
import Psychological from './views/Services/Psychological.vue';
import Limitations from './views/Services/Limitations.vue';
import InDev from './views/InDev/InDev.vue';

let routes = {
    '/': {
        routeName: 'Главная',
        component: MainPage
    },
    '/about': {
        routeName: 'О нас',
        component: AboutPage,
        subRoutes: {
            '/common': {
                routeName: 'Общая информация',
                component: Common
            },
            '/conditions': {
                routeName: 'Условия приема',
                component: Conditions
            },
            '/schedule': {
                routeName: 'График работы',
                component: InDev
            },
            '/rules': {
                routeName: 'Правила внутреннего распорядка',
                component: Rules
            },
            '/docs': {
                routeName: 'Документы и награды',
                component: InDev
            }
        }
    },
    '/staff': {
        routeName: 'Специалисты',
        component: StaffPage
    },
    '/rooms': {
        routeName: 'Номерной фонд',
        component: RoomsPage
    },
    '/services': {
        routeName: 'Услуги',
        component: ServicesPage,
        subRoutes: {
            '/domestic': {
                routeName: 'Социально-бытовые',
                component: Domestic
            },
            '/medical': {
                routeName: 'Социально-медицинские',
                component: Medical
            },
            // '/psychological': {
            //     routeName: 'Социально-психологические',
            //     component: Psychological
            // },
            '/educational': {
                routeName: 'Социально-педагогические',
                component: Educational
            },
            '/labor': {
                routeName: 'Социально-психологические',
                component: Labor
            },
            '/legal': {
                routeName: 'Социально-правовые',
                component: Legal
            },
            '/limitations': {
                routeName: 'Услуги в целях повышения коммуникативного потенциала получателей услуг, имеющих ограничения жизнедеятельности',
                component: Limitations
            }
        }
    },
    '/rates': {
        routeName: 'Тарифы',
        component: RatesPage
    },
    '/contacts': {
        routeName: 'Контакты',
        component: ContactsPage
    }
};

export default routes;