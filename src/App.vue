<template>
  <div id="app-wrapper">
    <hamburger></hamburger>
    <sidebar></sidebar>
    <slider></slider>
  </div>
</template>

<script>
import Hamburger from './components/Sidebar/Hamburger.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import Slider from './components/Slider/Slider.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Test'
    }
  },
  components: {
    Hamburger,
    Sidebar,
    Slider
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
