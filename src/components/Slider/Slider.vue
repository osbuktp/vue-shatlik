<template>
    <div class="slider">
        <transition name="slide">
            <div class="slider__image-wrapper" :key="currentImage" :style="{ backgroundImage: 'url(.' + imageUrl + ')' }">
            </div>
        </transition>
    </div>
</template>

<script>
import backImgOne from '../../assets/hotel.jpg';
import backImgTwo from '../../assets/hotel2.jpg';
import backImgThree from '../../assets/hotel3.jpg';

export default {
    data() {
        return {
            currentImage: 0,
            images: [
                {
                    url: backImgOne
                },
                {
                    url: backImgTwo
                },
                {
                    url: backImgThree
                }
            ]
        }
    },
    methods: {
        shuffleImages() {
            this.currentImage++;
        }
    },
    computed: {
        imageUrl() {
            return this.images[this.currentImage % this.images.length].url;
        }
    },
    mounted() {
        setInterval(this.shuffleImages, 5000);
    }
}
</script>


<style lang="scss" scoped>
$min-width: 901px;
.slider {
    @media (min-width: $min-width) {
        height: 800px;
    }
    height: 80vh;
    position: relative;
    overflow: hidden;
}

.slider__image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}

.slide-enter-active {
    transform: translateX(-100%);
}

.slide-enter-to {
    transform: translateX(0);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>
