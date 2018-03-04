import Login from './views/Login/Login.vue'
import Events from './views/Events/Events.vue'
import Event from './views/Events/Event/Event.vue'
import Spots from './views/Spots/Spots.vue'

const routes = [{
    path: '/',
    component: Login
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/events/new',
    component: Event,
    props: {
      isNewEvent: true
    }
  },
  {
    path: '/events/:id',
    component: Event,
    props: {
      isNewEvent: false
    }
  },
  {
    path: '/spots',
    component: Spots
  }
]

export default routes
