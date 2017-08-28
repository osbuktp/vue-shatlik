<template>
    <div class="slider">
        <transition name="slide">
            <div class="slider__image-wrapper" :key="currentImage" :style="{ backgroundImage: currentUrl }">
                <div class="slider__image-text">
                    <p>{{ images[currentImage % 3].text }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import backImgOne from '../../assets/img1.jpg';
import backImgTwo from '../../assets/img2.jpg';
import backImgThree from '../../assets/img3.jpg';

export default {
    data() {
        return {
            currentImage: 0,
            images: [
                {
                    url: backImgOne,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum unde quis, numquam ratione quia iure, necessitatibus repudiandae quasi officia asperiores, at quas temporibus aperiam dolorem corrupti obcaecati vel assumenda enim nemo odit error quae! Neque possimus, voluptatibus laudantium, ipsa nam saepe adipisci rem fugiat libero mollitia, voluptate sint culpa.'
                },
                {
                    url: backImgTwo,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis inventore quisquam deleniti, ducimus in cum, magni blanditiis recusandae ipsam odio temporibus optio possimus ipsum quaerat praesentium non unde obcaecati maiores expedita nihil earum architecto neque impedit! Doloremque repellat laudantium labore cupiditate veniam unde aut debitis possimus nisi asperiores, vitae odit dolor tempora libero et! Laborum quasi iste nulla omnis.'
                },
                {
                    url: backImgThree,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis inventore quisquam deleniti, ducimus in cum, magni blanditiis recusandae ipsam odio temporibus optio possimus ipsum quaerat praesentium non unde obcaecati maiores expedita nihil earum architecto neque impedit!'
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
        },
        currentUrl() {
            return `url(".${this.imageUrl}")`;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}
.slider__image-text {
    background-color: rgba(25, 118, 210, 0.8);
    padding: 20px;
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
    transform: translateX(-100%);
}

.slide-enter-to {
    transform: translateX(0);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>
