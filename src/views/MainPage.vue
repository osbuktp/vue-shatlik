<template>
    <div id="main-page">
        <slider></slider>
        <section class="reasons">
            <section-header message="10 причин приехать к нам"></section-header>
            <reasons></reasons>
        </section>
        <section class="main-gallery">
            <section-header message="Фотоэкскурсия по санаторию"></section-header>
            <main-gallery></main-gallery>
        </section>
        <section class="faq">
            <section-header message="Часто задаваемые вопросы"></section-header>
            <f-a-q></f-a-q>
        </section>
        <section class="yandex-map">
            <section-header message="Мы на YandexMaps"></section-header>
            <yandex-map></yandex-map>
        </section>
    </div>
</template>

<script>
import Slider from '../components/Slider/Slider.vue';
import Reasons from '../components/Reasons/Reasons.vue';
import MainGallery from '../components/MainGallery/MainGallery.vue';
import FAQ from '../components/FAQ/FAQ.vue';
import YandexMap from '../components/YandexMap/YandexMap.vue';
import SectionHeader from '../components/SectionHeader/SectionHeader.vue';

export default {
    components: {
        Slider,
        Reasons,
        MainGallery,
        FAQ,
        YandexMap,
        SectionHeader
    }
}
</script>
