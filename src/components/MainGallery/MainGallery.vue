<template>
    <section class="gallery-wrapper">
        <header>
            <h1 class="section-header">Фотоэкскурсия по санаторию</h1>
        </header>
        <div class="gallery">
            <div class="main-image" :style="{ backgroundImage: 'url(' + mainImageSrc + ')' }">
            </div>
            <div class="sub-images">
                <div class="sub-image" @click="updateMainImage(image.id)" v-for="image in images" :key="image.id" :style="{ backgroundImage: 'url(' + image.src + ')' }">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
$min-width: 901px;
.gallery {
    display: flex;
    @media (min-width: $min-width) {
        height: 610px;
    }
}

.main-image {
    display: none;
    @media (min-width: $min-width) {
        display: block;
        flex: 1;
        height: 100%;
        background-size: cover;
    }
}

.main-image,
.sub-image {
    background-position: center;
}

.sub-images {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    box-sizing: border-box;
    @media (min-width: $min-width) {
        width: 370px;
    }
}

.sub-image {
    width: 170px;
    height: 110px;
    margin: 5px;
    background-size: 100% auto;
    @media (min-width: $min-width) {
        transition: background-size .5s linear, filter .5s linear;
        &:hover {
            background-size: 110% auto;
            filter: brightness(100%);
            cursor: pointer;
            filter: brightness(60%);
        }
    }
}
</style>

<script>
// import img1 from "../../assets/MainGallery/img1.png";
// import img2 from "../../assets/MainGallery/img2.png";
// import img3 from "../../assets/MainGallery/img3.png";
// import img4 from "../../assets/MainGallery/img4.png";
// import img5 from "../../assets/MainGallery/img5.png";
// import img6 from "../../assets/MainGallery/img6.png";
// import img7 from "../../assets/MainGallery/img7.png";
// import img8 from "../../assets/MainGallery/img8.png";
// import img9 from "../../assets/MainGallery/img9.png";
// import img10 from "../../assets/MainGallery/img10.png";

export default {
    data() {
        return {
            currentImageId: 0,
            images: [
                { id: 0, src: 'https://unsplash.it/600/900/?random&sig=0' },
                { id: 1, src: 'https://unsplash.it/600/900/?random&sig=1' },
                { id: 2, src: 'https://unsplash.it/600/900/?random&sig=2' },
                { id: 3, src: 'https://unsplash.it/600/900/?random&sig=3' },
                { id: 4, src: 'https://unsplash.it/600/900/?random&sig=4' },
                { id: 5, src: 'https://unsplash.it/600/900/?random&sig=5' },
                { id: 6, src: 'https://unsplash.it/600/900/?random&sig=6' },
                { id: 7, src: 'https://unsplash.it/600/900/?random&sig=7' },
                { id: 8, src: 'https://unsplash.it/600/900/?random&sig=8' },
                { id: 9, src: 'https://unsplash.it/600/900/?random&sig=9' }
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
