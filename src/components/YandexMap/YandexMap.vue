<template>
    <div class="yandex-map__map" id="yMap">
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';
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


