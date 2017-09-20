import VueRouter from 'vue-router';
import routes from './routes.js';


let routerConfig = [];
for (let route in routes) {
    routerConfig.push({
        path: route,
        component: routes[route].component
    })
    if (routes[route].subRoutes) {
        for (let subRoute in routes[route].subRoutes) {
            routerConfig.push({
                path: route + subRoute,
                component: routes[route].subRoutes[subRoute].component
            })
        }
    }
}
console.dir(routerConfig);
let router = new VueRouter({routes: routerConfig});

export default router;