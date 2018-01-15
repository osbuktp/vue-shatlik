<template>
  <main class="main">
    <section class="section reasons">
      <h1 class="title has-text-centered">
        10 причин приехать к нам
      </h1>
      <reasons></reasons>
    </section>
    <section class="section excursion">
      <h1 class="title has-text-centered">
        Экскурсия по санаторию
      </h1>
      <main-gallery></main-gallery>
    </section>
    <section class="section faq">
      <div class="container">
        <h1 class="title has-text-centered">
          Часто задаваемые вопросы
        </h1>
      </div>
    </section>
    <section class="section yandex-map">
      <div class="container">
        <h1 class="title has-text-centered">
          Мы на YandexMaps
        </h1>
      </div>
    </section>
  </main>
</template>


<script>
import Reasons from "../../components/Reasons/Reasons.vue";
import MainGallery from "../../components/MainGallery/MainGallery.vue";
export default {
  components: {
    Reasons,
    MainGallery
  }
};
</script>
