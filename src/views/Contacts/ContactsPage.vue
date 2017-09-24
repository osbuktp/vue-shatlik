<template>
    <div class="contacts">
        <simple-page>
            <h1 class="article__title">
                Контакты
            </h1>
            <h2 class="article__title">
                Телефоны, справочные:
            </h2>
            <div class="contacts__content">
                <div class="contacts__row">
                    <span class="row__name"><p>Директор ларионова Лидия Николаевна</p></span>
                    <span class="row__tel"><p>+7 (85558) 3-32-32</p></span>
                </div>
                <div class="contacts__row">
                    <span class="row__name"><p>Главный бухгалтер Кузьмина Надежда Николаевна</p></span>
                    <span class="row__tel"><p>+7 (85558) 3-32-32</p></span>
                </div>
                <div class="contacts__row">
                    <span class="row__name"><p>Специалист по социальной работе Камалова Венера Гизаровна</p></span>
                    <span class="row__tel"><p>+7 (987) 291-30-33</p></span>
                </div>
            </div>
        </simple-page>
    </div>
</template>


<style lang="sass" scoped>
    .contacts__content
        width: 100%
        display: flex
        flex-direction: column
        .contacts__row
            span
                padding: 0px 20px
            display: flex
            justify-content: space-between
            &:nth-child(2n)
                background-color: #ECEFF1
            .row__name
                padding-right: 30px
</style>

<script>
import SimplePage from '../../components/SimplePage/SimplePage.vue';
export default {
    components: {
        SimplePage
    }
}
</script>

