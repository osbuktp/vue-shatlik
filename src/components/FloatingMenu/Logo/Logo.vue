<template>
    <div :mobile="mobile" class="logo">
        <img :src="'.' + Logo" alt="">
    </div>
</template>

<script>
import Logo from '../../../assets/logo.png';
export default {
    data() {
        return {
            Logo
        }
    },
    props: [
        'mobile'
    ]
}
</script>

<style lang="scss">
@import '../../../assets/variables';
.logo {
    background-color: $primary-color;
    box-sizing: border-box;
    @media (min-width: $min-width) {
        flex: 1;
        padding: 10px;
        img {
            max-width: 100px;
        }
    }
}

.logo:not([mobile="true"]) {
    display: none;
    @media (min-width: $min-width) {
        display: block;
    }
}

.logo[mobile="true"] {
    text-align: center;
    height: 20vh;
    @media (min-width: $min-width) {
        display: none;
    }
    img {
        height: 100%;
        width: auto;
    }
}
</style>
