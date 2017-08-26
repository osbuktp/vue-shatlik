<template>
    <div class="sidebar" :class="{sidebar_opened: opened}">
        <acc-panel></acc-panel>
        <sh-menu></sh-menu>
    </div>
</template>

<script>
import EventBus from '../../EventBus.vue';
import AccPanel from '../AccPanel/AccPanel.vue';
import ShMenu from '../ShMenu/ShMenu.vue';

export default {
    components: {
        AccPanel,
        ShMenu
    },
    data() {
        return {
            opened: false
        }
    },
    methods: {
        toggleSidebar() {
            this.opened = !this.opened;
        }
    },
    mounted() {
        EventBus.$on('toggleSidebar', this.toggleSidebar);
    }
}
</script>

<style lang="scss" scoped>
$min-width: 901px;

.test {
    font-size: 1rem;
}

.sidebar {
    position: fixed;
    background-color: #2196F3;
    z-index: 2;
    height: 100%;
    transition: transform .3s;
    overflow-y: auto;
    @media (orientation: portrait) and (max-width: 900px) {
        width: 100vw;
        transform: translate3d(-100vw, 0px, 0px);
    }
    @media (orientation: landscape) and (max-width: 900px) {
        width: 100vh;
        transform: translate3d(-100vh, 0px, 0px);
    }
    @media (min-width: $min-width) {
        overflow: visible;
        position: static;
        height: auto;
    }
}

.sidebar_opened {
    transform: translate3d(0px, 0px, 0px);
}
</style>

