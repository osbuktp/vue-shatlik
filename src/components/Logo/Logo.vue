<template>
    <div :mobile="mobile" class="logo">
        <img :src="'.' + Logo" alt="">
    </div>
</template>

<script>
import Logo from '../../assets/logo.png';
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
$min-width: 901px;
.logo {
    background-color: #2196F3;
    padding: 10px;
    box-sizing: border-box;
    img {
        max-width: 200px;
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
    }
}
</style>
