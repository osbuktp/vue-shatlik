<template>
    <nav class="menu">
        <div class="menu__item" v-for="(routeObj, route, id) in routes" :key="id">
            <router-link class="menu__item__link" v-if="routeObj.subRoutes == undefined" :to="route">{{routeObj.routeName}}</router-link>
            <a v-else class="menu__item__link" @click="showSubRoutes(route)">{{routeObj.routeName}}</a>
            <div class="menu__sub-menu" :class="{'menu__sub-menu_shown': routeObj.showSubRoutes}" v-if="routeObj.subRoutes != undefined">
                <router-link class="menu__item__link" v-for="(subRouteObj, subRoute, subID) in routeObj.subRoutes" :key="subID" :to="route + subRoute">{{subRouteObj.routeName}}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import '../../../assets/variables';
.menu {
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: $min-width) {
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
    }
}

.menu__item__link {
    font-size: 1rem;
    text-transform: uppercase;
    box-sizing: border-box;
    @media (min-width: $min-width) {
        text-align: center;
        font-size: 1.3rem;
        cursor: pointer;
        transition: box-shadow .2s ease;
        padding: 1rem 10px;
    }
    &, a { padding: 12px 10px;
    color: white;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    display: inline-block;
    margin: 0;
    }
}

.router-link-exact-active {
    box-shadow: inset 10px 0 0 0 $primary-color-dark;
    padding-left: 20px;
    @media (min-width: $min-width) {
        box-shadow: inset 0 -6px 0 0 $primary-color-dark;
        padding-left: 10px;
    }
}

.menu__item__link:hover {
    @media (min-width: $min-width) {
        box-shadow: inset 0 -6px 0 0 $primary-color-dark;
    }
}


.menu__sub-menu {
    display: none;
    flex-direction: column; // overflow-y: hidden;
    >.menu__item__link {
        padding-left: 20px;
    }

    @media (min-width: $min-width) {
        padding: 20px;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        background-color: $primary-color;
        position: absolute;
        z-index: 2;
        flex-direction: row;
        width: 80%;
        left: 10%;
        >.menu__item__link {
            width: 300px;
            padding-left: 0px;
        }
    }
}

.menu__item__link:hover+.menu__sub-menu,
.menu__sub-menu:hover {
    @media (min-width: $min-width) {
        display: flex;
    }
}

.menu__sub-menu_shown {
    @media (max-width: $min-width) {
        display: flex;
    }
}
</style>

<script>
import routes from '../../../routes.js';

export default {
    data() {
        return {
            routes: {}
        }
    },
    methods: {
        showSubRoutes(route) {
            this.routes[route].showSubRoutes = !this.routes[route].showSubRoutes;
        }
    },
    created() {
        let newRoutes = routes;
        for (let route in routes) {
            routes[route].showSubRoutes = false;
        };
        this.routes = newRoutes;
    },
    computed: {
        activePath() {
            return '/' + this.$route.path.split('/')[1];
        }
    }
}
</script>


