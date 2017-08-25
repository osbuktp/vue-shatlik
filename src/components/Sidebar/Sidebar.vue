<template>
    <div class="sidebar" :class="{sidebar_opened: opened}">
    </div>
</template>

<script>
import EventBus from '../../EventBus.vue';

export default {
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
.sidebar {
    @media (min-width: 900px) {
        display: none;
    };
    @media (orientation: portrait) {
        width: 100vw;
        transform: translate3d(-100vw, 0px, 0px);
    };
    @media (orientation: landscape) {
        width: 100vh;
        transform: translate3d(-100vh, 0px, 0px);
    };
    position: fixed;
    z-index: 2;
    height: 100%;
    transition: transform .3s;
    background-color: #03A9F4;
    overflow-y: auto;
}
.sidebar_opened {
    transform: translate3d(0px, 0px, 0px);
}
</style>

