<template>
    <div class="gallery">
        <div class="main-image" :style="{ backgroundImage: 'url(' + mainImageSrc + ')' }">
        </div>
        <div class="sub-images">
            <div class="sub-image" @click="updateMainImage(image.id)" v-for="image in images" :key="image.id" :style="{ backgroundImage: 'url(./' + image.src + ')' }">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';
.gallery {
    display: flex;
    @media (min-width: $min-width) {
        height: 46vw;
    }
}

.main-image {
    display: none;
    @media (min-width: $min-width) {
        display: block;
        width: calc(69vw - 10px);
        height: calc(100% - 20px);
        margin: 10px 0 10px 10px;
        background-size: cover;
    }
}

.main-image,
.sub-image {
    background-position: center;
}

.sub-images {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.sub-image {
    margin: 5px;
    background-size: 100% auto;
    width: calc(50vw - 25px);
    height: 30vw;
    @media (min-width: $min-width) {
        width: calc(15.5vw - 25px);
        height: calc(9.2vw - 12px);
        transition: background-size .2s linear, filter .2s linear;
        filter: brightness(70%);
        &:hover {
            background-size: 110% auto;
            filter: brightness(100%);
            cursor: pointer;
        }
    }
}
</style>

<script>
import img1 from "../../assets/MainGallery/1.jpg";
import img2 from "../../assets/MainGallery/2.jpg";
import img3 from "../../assets/MainGallery/3.jpg";
import img4 from "../../assets/MainGallery/4.jpg";
import img5 from "../../assets/MainGallery/5.jpg";
import img6 from "../../assets/MainGallery/6.jpg";
import img7 from "../../assets/MainGallery/7.jpg";
import img8 from "../../assets/MainGallery/8.jpg";
import img9 from "../../assets/MainGallery/9.jpg";
import img10 from "../../assets/MainGallery/10.jpg";

export default {
    data() {
        return {
            currentImageId: 0,
            images: [
                { id: 0, src: img1 },
                { id: 1, src: img2 },
                { id: 2, src: img3 },
                { id: 3, src: img4 },
                { id: 4, src: img5 },
                { id: 5, src: img6 },
                { id: 6, src: img7 },
                { id: 7, src: img8 },
                { id: 8, src: img9 },
                { id: 9, src: img10 }
            ]
        }
    },
    methods: {
        updateMainImage(id) {
            this.currentImageId = id;
        }
    },
    computed: {
        mainImageSrc() {
            return this.images[this.currentImageId].src;
        }
    }
}
</script>
