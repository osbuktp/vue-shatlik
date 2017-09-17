<template>
    <nav class="menu">
        <div class="menu__item" v-for="(route, id) in routes" :key="id">
            <div class="menu__item__link" :class="{ 'menu__item__link_active': route.path == activePath}" @click="route.showSubRoutes = !route.showSubRoutes">
                <router-link :to="route.path">{{route.name}}</router-link>
            </div>
            <div class="menu__sub-menu" :class="{'menu__sub-menu_shown': route.showSubRoutes}" v-if="route.subPaths != undefined">
                <div class="menu__item__link" v-for="(subRoute, id) in route.subPaths" :key="id">
                    <router-link :to="route.path + subRoute.path">{{subRoute.name}}</router-link>
                </div>
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
    text-align: center;
    color: white;
    text-transform: uppercase;
    box-sizing: border-box;
    @media (min-width: $min-width) {
        font-size: 1.3rem;
        cursor: pointer;
        transition: box-shadow .2s ease;
        a {
            padding: 1rem 10px;
        }
    }
    a {
        display: inline-block;
        padding: 12px 10px;
        box-sizing: border-box;
        position: relative;
        text-decoration: none;
        margin: 0;
        color: inherit;
    }
}

.menu__item__link_active {
    box-shadow: inset 10px 0 0 0 $primary-color-dark;
    padding-left: 20px;
    @media (min-width: $min-width) {
        box-shadow: inset 0 -6px 0 0 $primary-color-dark;
        padding-left: 0px;
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
            routes
        }
    },
    computed: {
        activePath() {
            return '/' + this.$route.path.split('/')[1];
        }
    }
}
</script>


