<template>
  <div class="floating-menu">
    <hamburger></hamburger>
    <logo mobile="true"></logo>
    <sidebar></sidebar>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Hamburger from './Hamburger/Hamburger.vue';
import Sidebar from './Sidebar/Sidebar.vue';
import Logo from './Logo/Logo.vue';


export default {
  components: {
    Hamburger,
    Sidebar,
    Logo
  }
}
</script>
