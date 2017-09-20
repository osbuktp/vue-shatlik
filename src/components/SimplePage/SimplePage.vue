<template>
    <section class="article">
        <div class="article__inner">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';
.article {
    display: flex;
    justify-content: center;
    font-weight: 300;
    &__inner {
        max-width: 900px;
        box-sizing: border-box;
        padding: 20px;
    }
    &__title {
        font-size: 2rem;
        font-weight: inherit;
    }
    &__quote {
        padding: 10px 0 10px 40px;
        border-left: 5px solid $primary-color;
    }
    p {
        font-size: 1.3rem;
    }
}
</style>

