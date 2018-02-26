import Login from './views/Login/Login.vue'
import Events from './views/Events/Events.vue'
import Spots from './views/Spots/Spots.vue'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/events',
        component: Events
    },
    {
        path: '/spots',
        component: Spots
    }
]

export default routes