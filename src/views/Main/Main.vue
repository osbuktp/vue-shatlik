<template>
  <main class="main">
    <section class="excursion">
      <h1 class="title has-text-centered">
        Экскурсия по санаторию
      </h1>
      <main-gallery></main-gallery>
    </section>
    <section class="faq container">
        <h1 class="title has-text-centered">
          Часто задаваемые вопросы
        </h1>
        <f-a-q></f-a-q>
    </section>
    <section class="yndxmap">
        <h1 class="title has-text-centered">
          Мы на YandexMaps
        </h1>
        <yandex-map></yandex-map>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  section {
    margin-top: 40px;
  }
}
</style>



<script>
import MainGallery from "../../components/MainGallery/MainGallery.vue";
import FAQ from '../../components/FAQ/FAQ.vue';
import YandexMap from '../../components/YandexMap/YandexMap.vue';

export default {
  components: {
    MainGallery,
    FAQ,
    YandexMap
  }
};
</script>
