import MainPage from './views/MainPage.vue';
import AboutPage from './views/AboutPage.vue';
import StaffPage from './views/StaffPage.vue';
import RoomsPage from './views/RoomsPage.vue';
import ServicesPage from './views/ServicesPage.vue';
import RatesPage from './views/RatesPage.vue';
import ContactsPage from './views/ContactsPage.vue';

let routes = [
    {
        path: '/',
        name: 'Главная',
        component: MainPage
    },
    {
        path: '/about',
        name: 'О нас',
        component: AboutPage,
        subPaths: [
            {
                path: '/common',
                name: 'Общая информация'
            },
            {
                path: '/conditions',
                name: 'Условия приема'
            },
            {
                path: '/schedule',
                name: 'График работы'
            },
            {
                path: '/rules',
                name: 'Правила внутреннего распорядка'
            },
            {
                path: '/docs',
                name: 'Документы и награды'
            }
        ]
    },
    {
        path: '/staff',
        name: 'Специалисты',
        component: StaffPage
    },
    {
        path: '/rooms',
        name: 'Номерной фонд',
        component: RoomsPage
    },
    {
        path: '/services',
        name: 'Услуги',
        component: ServicesPage,
        subPaths: [
            {
                path: '/domestic',
                name: 'Социально-бытовые'
            },
            {
                path: '/medical',
                name: 'Социально-медицинские'
            },
            {
                path: '/psychological',
                name: 'Социально-психологические'
            },
            {
                path: '/educational',
                name: 'Социально-педагогические'
            },
            {
                path: '/labor',
                name: 'Социально-трудовые'
            },
            {
                path: '/legal',
                name: 'Социально-правовые'
            },
            {
                path: '/limitation',
                name: 'Услуги в целях повышения коммуникативного потенциала получателей социальных услуг, имеющих ограничения жизнедеятельности'
            }
        ]
    },
    {
        path: '/rates',
        name: 'Тарифы',
        component: RatesPage
    },
    {
        path: '/contacts',
        name: 'Контакты',
        component: ContactsPage
    }
]

export default routes;