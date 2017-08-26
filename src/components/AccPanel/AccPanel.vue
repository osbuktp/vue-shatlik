<template>
    <div class="acc-panel">
        <button title="Панель для слабовидящих" class="acc-panel__item" disabled>
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none" />
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
            </svg>
        </button>
        <button @click="incFontSize" title="Увеличить текст" class="acc-panel__item">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
            </svg>
        </button>
        <button @click="decFontSize" title="Уменьшить текст" class="acc-panel__item">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M24 24H0V0h24v24z" id="a" />
                </defs>
                <clipPath id="b">
                    <use overflow="visible" xlink:href="#a" />
                </clipPath>
                <path clip-path="url(#b)" d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
            </svg>
        </button>
        <button @click="abortChanges" title="Обратить изменения" class="acc-panel__item">
            <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
            </svg>
        </button>
    </div>
</template>

<script>
let html = document.querySelector('html');

export default {
    data() {
        return {
            fontSize: 14
        }
    },
    created() {
        this.updateHTMLFontSize();
    },
    methods: {
        updateHTMLFontSize() {
            html.style.fontSize = `${this.fontSize}px`;
        },
        incFontSize() {
            if (this.fontSize < 28) {
                this.fontSize += 2;
                this.updateHTMLFontSize();
            }
        },
        decFontSize() {
            if (this.fontSize > 14) {
                this.fontSize -= 2;
                this.updateHTMLFontSize();
            }
        },
        abortChanges() {
            this.fontSize = 14;
            this.updateHTMLFontSize();
        }
    }
}
</script>


<style lang="scss" scoped>
.acc-panel {
    @media (orientation: portrait) {
        padding-right: 48px;
    }
    display: flex;
    background-color: #FFFFFF; // border-bottom: solid 2px #1976D2;
    .acc-panel__item {
        flex: 1;
        text-align: center;
        padding: 0;
        background: transparent;
        border: 0;
        height: 48px;
        box-sizing: border-box;
        cursor: pointer;
        outline: 0;

        svg {
            fill: #757575;
            height: 32px;
            width: 32px;
        }
    }
    .acc-panel__item:active {
        svg {
            fill: #BDBDBD;
        }
    }
}
</style>

