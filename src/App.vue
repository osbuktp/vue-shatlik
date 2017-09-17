<template>
  <div id="app-wrapper">
    <header>
      <floating-menu></floating-menu>
    </header>
    <main>
      <!-- <breadcrumbs></breadcrumbs> -->
      <router-view></router-view>
    </main>
    <sh-footer></sh-footer>
  </div>
</template>

<script>
import FloatingMenu from './components/FloatingMenu/FloatingMenu.vue';
import ShFooter from './components/ShFooter/ShFooter.vue';

export default {
  name: 'app',
  components: {
    FloatingMenu,
    ShFooter
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
