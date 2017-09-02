<template>
  <div id="app-wrapper">
    <logo  mobile="true"></logo>
    <hamburger></hamburger>
    <sidebar></sidebar>
    <slider></slider>
    <reasons></reasons>
    <main-gallery></main-gallery>
    <yandex-map></yandex-map>
  </div>
</template>

<script>
import Hamburger from './components/Sidebar/Hamburger.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import Slider from './components/Slider/Slider.vue'
import Logo from './components/Logo/Logo.vue';
import Reasons from './components/Reasons/Reasons.vue'
import MainGallery from './components/MainGallery/MainGallery.vue';
import YandexMap from './components/YandexMap/YandexMap.vue';

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
    Slider,
    Logo,
    Reasons,
    MainGallery,
    YandexMap
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
.section-header {
  margin-top: 4rem;
  font-size: 2.5rem;
  font-weight: 200;
  text-align: center;
}
</style>
