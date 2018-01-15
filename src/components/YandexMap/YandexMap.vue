<template>
    <div class="yandex-map__map" id="yMap">
        <yandex-map
        :coords="[55.285888, 51.992679]"
        zoom="16"
        style="width: 100%; height: 100%;">
        <ymap-marker marker-type="placemark" :coords="[55.285276, 51.992593]" hint-content="Шатлык" :icon="{color: 'blue',glyph: 'home'}"></ymap-marker>
        </yandex-map>
    </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: {
    yandexMap,
    ymapMarker
  }
};
</script>


<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";

.yandex-map {
  &__map {
    height: 60vh;
    min-height: 300px;
    @include desktop {
      height: 600px;
    }
  }
}
</style>


