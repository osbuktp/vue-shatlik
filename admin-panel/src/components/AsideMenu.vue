<template>
    <aside class="menu">
        <p class="menu-label">
            Меню
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/spots">
                    Свободные места</router-link>
            </li>
            <li>
                <router-link to="/events">Мероприятия</router-link>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    margin-right: 50px;
}
</style>
