<template>
    <div v-if="route[0].path != '/'" class="breadcrumbs">
        <router-link :to="(route.length > 1) && (id == 0) ? '': path.path" class="bc__item" v-for="(path, id) in route" :key="id">
            {{path.name}}
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';
.breadcrumbs {
    padding: 20px 0px;
    font-size: 1.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.bc__item {
    text-align: center;
    text-transform: uppercase;
    color: $secondary-text-color;
    &:not(:last-child):after {
        content: "⟶";
        width: 50px;
        display: inline-block;
        text-align: center;
    }
}
</style>


<script>
import routes from '../../routes.js';


export default {
    computed: {
        route() {
            let paths = this.$route.path.split('/');
            paths.shift();
            if (paths[0] == "") return [{
                path: '/',
                name: 'Главная'
            }];
            let currentRoutes = [];
            if (routes[`/${paths[0]}`]) {
                currentRoutes.push({
                    path: `/${paths[0]}`,
                    name: routes[`/${paths[0]}`].routeName
                })
                if (routes[`/${paths[0]}`].subRoutes[`/${paths[1]}`]) {
                    currentRoutes.push({
                        path: `/${paths[0]}/${paths[1]}`,
                        name: routes[`/${paths[0]}`].subRoutes[`/${paths[1]}`].routeName
                    })
                }
            };
            return currentRoutes;
        }
    }
}
</script>
