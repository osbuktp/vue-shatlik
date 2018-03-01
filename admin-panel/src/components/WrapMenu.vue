<template>
    <div>
        <nav class="navbar is-white">
            <div class="navbar-brand">
                <a class="navbar-item brand-text">
                    Шатлык
                </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="shatlik.ru">
                        Перейти к сайту
                    </a>
                    <a class="navbar-item" href="shatlik.ru">
                        Выйти
                    </a>
                </div>
            </div>
        </nav>
        <div class="columns">
            <div class="column is-3">
                <aside class="menu">
                    <p class="menu-label">
                        Меню
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/spots">Свободные места</router-link>
                        </li>
                        <li>
                            <router-link to="/events">Мероприятия</router-link>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>