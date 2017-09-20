import MainPage from './views/Main/MainPage.vue';
import AboutPage from './views/About/AboutPage.vue';
import StaffPage from './views/Staff/StaffPage.vue';
import RoomsPage from './views/Rooms/RoomsPage.vue';
import ServicesPage from './views/Services/ServicesPage.vue';
import RatesPage from './views/Rates/RatesPage.vue';
import ContactsPage from './views/Contacts/ContactsPage.vue';
import Common from './views/About/Common.vue';

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
                routeName: 'Условия приема'
            },
            '/schedule': {
                routeName: 'График работы'
            },
            '/rules': {
                routeName: 'Правила внутреннего распорядка'
            },
            '/docs': {
                routeName: 'Документы и награды'
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
                routeName: 'Социально-бытовые'
            },
            '/medical': {
                routeName: 'Социально-медицинские'
            },
            '/psychological': {
                routeName: 'Социально-психологические'
            },
            '/educational': {
                routeName: 'Социально-педагогические'
            },
            '/labor': {
                routeName: 'Социально-трудовые'
            },
            '/legal': {
                routeName: 'Социально-правовые'
            },
            '/limitations': {
                routeName: 'Услуги в целях повышения коммуникативного потенциала получателей социальных услуг, имеющих ограничения жизнедеятельности'
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

// let routes = [
//     {
//         path: '/',
//         routeName: 'Главная',
//         component: MainPage
//     },
//     {
//         path: '/about',
//         routeName: 'О нас',
//         component: AboutPage,
//         subPaths: [
//             {
//                 path: '/common',
//                 routeName: 'Общая информация'
//             },
//             {
//                 path: '/conditions',
//                 routeName: 'Условия приема'
//             },
//             {
//                 path: '/schedule',
//                 routeName: 'График работы'
//             },
//             {
//                 path: '/rules',
//                 routeName: 'Правила внутреннего распорядка'
//             },
//             {
//                 path: '/docs',
//                 routeName: 'Документы и награды'
//             }
//         ]
//     },
//     {
//         path: '/staff',
//         routeName: 'Специалисты',
//         component: StaffPage
//     },
//     {
//         path: '/rooms',
//         routeName: 'Номерной фонд',
//         component: RoomsPage
//     },
//     {
//         path: '/services',
//         routeName: 'Услуги',
//         component: ServicesPage,
//         subPaths: [
//             {
//                 path: '/domestic',
//                 routeName: 'Социально-бытовые'
//             },
//             {
//                 path: '/medical',
//                 routeName: 'Социально-медицинские'
//             },
//             {
//                 path: '/psychological',
//                 routeName: 'Социально-психологические'
//             },
//             {
//                 path: '/educational',
//                 routeName: 'Социально-педагогические'
//             },
//             {
//                 path: '/labor',
//                 routeName: 'Социально-трудовые'
//             },
//             {
//                 path: '/legal',
//                 routeName: 'Социально-правовые'
//             },
//             {
//                 path: '/limitation',
//                 routeName: 'Услуги в целях повышения коммуникативного потенциала получателей социальных услуг, имеющих ограничения жизнедеятельности'
//             }
//         ]
//     },
//     {
//         path: '/rates',
//         routeName: 'Тарифы',
//         component: RatesPage
//     },
//     {
//         path: '/contacts',
//         routeName: 'Контакты',
//         component: ContactsPage
//     }
// ]