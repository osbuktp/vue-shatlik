<template>
    <section class="article">
        <div class="article__inner">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
.article {
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 1.3rem;
  &__inner {
    max-width: 1200px;
    box-sizing: border-box;
    padding: 20px;
  }
  &__title {
    font-weight: inherit;
  }
  h1.article__title {
    font-size: 2rem;
  }
  h2.article__title {
    font-size: 1.8rem;
  }
  &__quote {
    padding: 10px 0 10px 40px;
    border-left: 5px solid $primary-color;
  }
  b {
    font-weight: 400;
  }
  // p {
  //     font-size: 1.3rem;
  // }
}
</style>

