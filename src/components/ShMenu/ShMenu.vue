<template>
    <nav class="menu">
        <a class="menu__item" :class="{ menu__item_active: route.id == 1 }" v-for="route in routes" :key="route.id" :href="route.route">{{ route.name }}</a>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                {
                    id: 1,
                    name: 'Главная',
                    route: '#'
                },
                {
                    id: 2,
                    name: 'О центре',
                    route: '#'
                },
                {
                    id: 6,
                    name: 'Услуги',
                    route: '#'
                },
                {
                    id: 8,
                    name: 'Отзывы',
                    route: '#'
                },
                {
                    id: 9,
                    name: 'Контакты',
                    route: '#'
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
a {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
}

.menu__item {
    padding: 10px 15px;
}

.menu__item:hover {
    background-color: #1976D2;
}

@media (min-width: 900px) {
    .menu {
        padding-top: 150px;
        display: flex;
        text-align: center;
        justify-content: center;
    }
    .menu__item {
        box-sizing: border-box;
        transition: border-width .2s ease;
    }
    .menu__item_active,
    .menu__item:hover {
        background-color: transparent;
        border-bottom: 6px solid #1976D2;
    }
}
</style>
