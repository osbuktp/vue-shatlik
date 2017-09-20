<template>
    <div class="news">
        <div class="news__main news__item" :style="{ backgroundImage: `url(${newsMain.src})` }">
            <div class="news__title">
                <a href="">{{ newsMain.title }}</a>
            </div>
        </div>
        <div class="news__sub">
            <div class="news__sub__item news__item" v-for="(item, id) in subNews" :key="id" :style="{backgroundImage: `url(${item.src})`}">
                <div class="news__title">
                    <a href="">{{ item.title }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';

.news {
    display: flex;
    flex-direction: column;
    .news__item {
        background-position: center;
        background-size: cover;
        position: relative;
        .news__title {
            position: absolute;
            width: 100%;
            padding: 20px;
            background-color: rgba(189, 189, 189, 0.8);
            box-sizing: border-box;
            transition: padding-bottom .2s ease;
            bottom: 0;
            left: 0;
            a {
                font-size: 1.3rem;
                text-decoration: none;
                color: black;
                font-weight: 300;
                text-transform: uppercase;
            }
        }
        &:hover .news__title {
            padding-bottom: 30px;
        }
    }
    .news__main {
        flex: 1;
        height: 200px;
    }
    .news__sub {
        display: flex;
        flex-direction: column;
        .news__sub__item {
            height: 200px;
        }
    }
    @media (min-width: $min-width) {
        height: 600px;
        flex-direction: row;
        .news__main {
            height: 100%;
        }
        .news__sub {
            width: 300px;
        }
    }
}
</style>


<script>
export default {
    data() {
        return {
            newsMain: {
                title: 'Новость 1',
                src: 'https://unsplash.it/600/900/?random&sig=11'
            },
            subNews: [
                {
                    title: 'Новость 2',
                    src: 'https://unsplash.it/600/900/?random&sig=21'
                },
                {
                    title: 'Новость 3',
                    src: 'https://unsplash.it/600/900/?random&sig=31'
                },
                {
                    title: 'Новость 4',
                    src: 'https://unsplash.it/600/900/?random&sig=41'
                },
                {
                    title: 'Новость 5',
                    src: 'https://unsplash.it/600/900/?random&sig=51'
                }
            ]
        }
    }
}
</script>
