<template>
    <div :mobile="mobile" class="logo">
        <img :src="'.' + Logo" alt="">
        <div class="info">
            <div class="info-el info-tel">
                <p>Телефон:</p>
                <a href="tel:+78555833232">+7(85558)3-32-32</a>
            </div>
            <div class="info-el info-mail">
                <p>Email:</p>
                <a href="mailto:shatlykcsp@yandex.ru">shatlykcsp@yandex.ru</a>
            </div>
        </div>
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

<style lang="scss" scoped>
@import '../../../assets/variables';

.logo {
    justify-content: space-between;
    background-color: $primary-color;
    box-sizing: border-box;
        padding: 30px;
    @media (min-width: $min-width) {
        // flex: 1;
        img {
            max-width: 200px;
        }
    }
}

.logo:not([mobile="true"]) {
    display: none;
    @media (min-width: $min-width) {
        display: flex;
        height: auto;
        max-height: 150px;
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
.info {
    display: none;
    @media (min-width: $min-width) {
    display: flex;

    }
}
.info-el {
    color: $primary-color-text;
    font-size: 1.3rem;
    p {
        margin: 0;
    }
    a {
        color: inherit;
    }
    padding: 5px 30px;
    margin-left: 40px;
    box-sizing: border-box;
    border: 2px solid $primary-color-text;
    border-radius: 10px;
    height: 100%;
    position: relative;
}
.info-el::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 20px);
    height: 40px;
    width: 40px;
    background-color: $primary-color;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    left: -20px;
}
.info-tel::before {
    background-image: url('../../../assets/icons/phone2.png');
}
.info-mail::before {
    background-image: url('../../../assets/icons/mail.png');
}
</style>
