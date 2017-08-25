<template>
  <div id="app-wrapper">
    <hamburger></hamburger>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Hamburger from './components/Sidebar/Hamburger.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Test'
    }
  },
  components: {
    Hamburger,
    Sidebar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
