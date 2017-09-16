<template>
    <div class="slider">
        <transition name="slide">
            <div class="slider__image-wrapper" :key="currentId" :style="{ backgroundImage: currentUrl }">
                <div class="slider__image-text">
                    <p>{{ images[currentId].text }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import backImgOne from '../../assets/img1.jpg';
import backImgOneMin from '../../assets/img1min.jpg';
import backImgTwo from '../../assets/img2.jpg';
import backImgTwoMin from '../../assets/img2min.jpg';
import backImgThree from '../../assets/img3.jpg';
import backImgThreeMin from '../../assets/img3min.jpg';

export default {
    data() {
        return {
            currentId: 0,
            images: [
                {
                    url: backImgOne,
                    minUrl: backImgOneMin,
                    text: 'Наслаждайтесь уникальной природой'
                },
                {
                    url: backImgTwo,
                    minUrl: backImgTwoMin,
                    text: 'Комплексное медицинское обслуживание'
                },
                {
                    url: backImgThree,
                    minUrl: backImgThreeMin,
                    text: 'Комфортное проживание и высокий уровень сервиса'
                }
            ]
        }
    },
    methods: {
        shuffleImages() {
            this.currentId = (this.currentId + 1) % 3;
        }
    },
    computed: {
        currentImage() {
            return this.images[this.currentId % this.images.length];
        },
        imageUrl() {
            return document.documentElement.clientWidth > 900 ? this.currentImage.url : this.currentImage.minUrl;
        },
        currentUrl() {
            return `url(".${this.imageUrl}")`;
        }
    },
    mounted() {
        this.shuffleImages();
        this.shuffleImages();
        this.shuffleImages();
        setInterval(this.shuffleImages, 5000);
    }
}
</script>


<style lang="scss" scoped>
$min-width: 901px;
.slider {
    @media (min-width: $min-width) {
        min-height: 640px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}
.slider__image-text {
    background-color: rgba(25, 118, 210, 0.8);
    padding: 20px;
    text-align: center;
    color: white;
    max-height: 70vh;
    overflow-y: auto;
    @media (min-width: $min-width) {
        max-width: 800px;
    }
    p {
        font-size: 1.5rem;
        margin: 0;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}

.slide-enter-active {
    transform: translate3d(100%, 0, 0);
}

.slide-enter-to {
    transform: translate3d(0, 0, 0);
}

.slide-leave-to {
    transform: translate3d(-100%, 0, 0);
}
</style>
