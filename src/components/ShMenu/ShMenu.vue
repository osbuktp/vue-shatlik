<template>
    <nav class="menu">
        <div class="menu__item" v-for="route in routes" :key="route.id">
            <div class="menu__item__link">
                <p>{{route.name}}</p>
            </div>
            <div class="menu__sub-menu" v-if="route.subRoutes != undefined">
                <div class="menu__item__link" v-for="subRoute in route.subRoutes" :key="subRoute.id">
                    <p>{{subRoute.name}}</p>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.menu {
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        height: 200px;
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
    }
}

.menu__item__link {
    padding: 10px;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    box-sizing: border-box;
    @media (min-width: 900px) {
        padding: 1rem 10px;
        cursor: pointer;
        transition: box-shadow .2s ease;
        .menu__item__link_active {
            box-shadow: inset 0 -6px 0 0 #1976D2;
        }
    }
    p {
        line-height: 1rem;
        margin: 0;
    }
}

.menu__item__link:hover {
    @media (min-width: 900px) {
        box-shadow: inset 0 -6px 0 0 #1976D2;
    }
}

.menu__item__link:hover+.menu__sub-menu,
.menu__sub-menu:hover {
    display: flex;
}

.menu__sub-menu {
    display: none;
    flex-direction: column;

    > .menu__item__link {
        padding-left: 20px;
    }

    @media (min-width: 900px) {
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


