<template>
    <section class="yandex-map">
        <header>
            <h1 class="section-header">Мы на YandexMaps</h1>
        </header>
        <div class="yandex-map__map" id="yMap">
        </div>
    </section>
</template>

<style lang="scss" scoped>
$min-width: 901px;
.yandex-map {
    &__map {
        height: 60vh;
        min-height: 300px;
        @media (min-width: $min-width) {
            height: 600px;
        }
    }
}
</style>


