<template>
    <nav class="menu">
        <div class="menu__item" v-for="route in routes" :key="route.id">
            <div class="menu__item__link" :class="{ 'menu__item__link_active': route.id == 1 }" @click="route.showSubRoutes = !route.showSubRoutes">
                <p>{{route.name}}</p>
            </div>
            <div class="menu__sub-menu" :class="{'menu__sub-menu_shown': route.showSubRoutes}" v-if="route.subRoutes != undefined">
                <div class="menu__item__link" v-for="subRoute in route.subRoutes" :key="subRoute.id">
                    <p>{{subRoute.name}}</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
$min-width: 901px;
.menu {
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: $min-width) {
        height: 200px;
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
    }
}

.menu__item__link {
    padding: 12px 10px;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    box-sizing: border-box;
    @media (min-width: $min-width) {
        padding: 1rem 10px;
        cursor: pointer;
        transition: box-shadow .2s ease;
    }
    p {
        line-height: 1rem;
        margin: 0;
    }
}

.menu__item__link_active {
    box-shadow: inset 10px 0 0 0 #1976D2;
    padding-left: 20px;
    @media (min-width: $min-width) {
        box-shadow: inset 0 -6px 0 0 #1976D2;
        padding-left: 10px;
    }
}

.menu__item__link:hover {
    @media (min-width: $min-width) {
        box-shadow: inset 0 -6px 0 0 #1976D2;
    }
}


.menu__sub-menu {
    display: none;
    flex-direction: column;

    >.menu__item__link {
        padding-left: 20px;
    }

    @media (min-width: $min-width) {
        box-sizing: border-box;
        background-color: #2196F3;
        position: absolute;
        z-index: 2;
        top: 200px;
        padding: 20px;
        flex-direction: row;
        width: 80%;
        left: 10%;
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
export default {
    data() {
        return {
            routes: [
                {
                    id: 1,
                    path: '#',
                    name: 'Главная'
                },
                {
                    id: 2,
                    path: '#',
                    name: 'О центре',
                    showSubRoutes: false,
                    subRoutes: [
                        {
                            id: 2.1,
                            path: '#',
                            name: 'Подробнее о нас'
                        },
                        {
                            id: 2.2,
                            path: '#',
                            name: 'Документы и награды'
                        },
                        {
                            id: 2.3,
                            path: '#',
                            name: 'Инфраструктура'
                        }
                    ]
                },
                {
                    id: 3,
                    path: '#',
                    name: 'Услуги'
                },
                {
                    id: 4,
                    path: '#',
                    name: 'Отзывы'
                },
                {
                    id: 5,
                    path: '#',
                    name: 'Контакты'
                }
            ]
        }
    }
}
</script>


