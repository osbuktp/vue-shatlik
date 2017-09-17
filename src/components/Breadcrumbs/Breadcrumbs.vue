<template>
    <div v-if="route[0].path != '/'" class="breadcrumbs">
        <router-link :to="path.path" class="bc__item" v-for="(path, id) in route" :key="id">
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

function returnSubPaths(paths) {
    if (!paths) return undefined;
    return paths.map(item => {
        return {
            path: item.path,
            name: item.name
        }
    })
}

export default {
    data() {
        return {
            paths: []
        }
    },
    created() {
        this.paths = routes.map((item) => {
            return {
                path: item.path,
                name: item.name,
                subPaths: returnSubPaths(item.subPaths)
            }
        });
    },
    computed: {
        route() {
            let currentPath = this.$route.path.split('/');
            currentPath = currentPath.filter(item => item != "");
            currentPath = currentPath.map( item => {
                let n, p;
                this.paths.forEach(path => {
                    if (`/${item}` == path.path) {
                        n = path.name;
                        p = path.path;
                    };
                    if (path.subPaths) {
                        path.subPaths.forEach(subPath => {
                            if (`/${item}` == subPath.path) {
                                n = subPath.name;
                                p = path.path + subPath.path
                            }
                        })
                    }
                });
                return {
                    name: n,
                    path: p
                }
            });
            if (currentPath.length == 0) return [{
                    name: 'Главная',
                    path: '/'
                }];
            return currentPath;
        }
    }
}
</script>
