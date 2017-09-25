<template>
    <simple-page>
        <h1 class="article__title">
            Специалисты
        </h1>
        <div class="staff__wrapper">
            <div class="staff__item" v-for="(item, id) in staff" :key="id">
                <img :src="'./' + item.photo" :alt="item.name">
                <div class="item__info">
                    <p class="info__name">{{item.name}}</p>
                    <p>{{item.spec}}</p>
                    <p>Стаж: {{item.exp}}</p>
                </div>
            </div>
        </div>
    </simple-page>
</template>

<style lang="scss" scoped>
@import '../../assets/variables';

.staff__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media(min-width: $min-width) {
        min-width: 900px;
    }
}
.staff__item {
    padding: 10px;
    img {
        width: 100%;
        height: auto;
    }
    .item__info {
        .info__name {
            font-size: 1.5rem;
        }
    }
    @media (min-width: $min-width), (orientation: landscape) {
        width: 250px;
    }
}
</style>


<script>
import SimplePage from '../../components/SimplePage/SimplePage.vue';

import Sandimirova from '../../assets/staff/sandimirova.jpg';
import Bataeva from '../../assets/staff/bataeva.jpg';
import Larionova from '../../assets/staff/larionova.jpg';
import Zaripova from '../../assets/staff/zaripova.jpg';
import Kamalova from '../../assets/staff/kamalova.jpg';
import Kashapova from '../../assets/staff/kashapova.jpg';
import Kolobova from '../../assets/staff/kolobova.jpg';
import Kuzmina from '../../assets/staff/kuzmina.jpg';
import Muhamed from '../../assets/staff/muh.jpg';
import Nosova from '../../assets/staff/nosova.jpg';
import Komissarova from '../../assets/staff/komissarova.jpg';
import Suleymanova from '../../assets/staff/suleymanova.jpg';
import Hannova from '../../assets/staff/hann.jpg';
import Shar from '../../assets/staff/shar.jpg';

export default {
    components: {
        SimplePage
    },
    data() {
        return {
            staff: [
                {
                    name: 'Абрамова Галина Алексеевна',
                    exp: '40 лет',
                    spec: 'Мед. Сестра (ночная)'
                },
                {
                    name: 'Камалова Венера Гизаровна',
                    exp: '15 лет',
                    spec: 'Специалист по социальной работе',
                    photo: Kamalova
                },
                {
                    name: 'Зарипова Назиря Гиздатулловна',
                    exp: '27 лет',
                    spec: 'Инструктор ЛФК',
                    photo: Zaripova
                },
                {
                    name: 'Исхакова Ильдуся Гильмутдинова',
                    exp: '42 года',
                    spec: 'Мед. Сестра (ночная)'
                },
                {
                    name: 'Комиссарова Юлия Валерьевна',
                    exp: '12 лет 6 месяцев',
                    spec: 'Психолог',
                    photo: Komissarova
                },
                {
                    name: 'Ларионова Лидия Николаевна',
                    exp: '36 лет',
                    spec: 'Директор',
                    photo: Larionova
                },
                {
                    name: 'Мухаметдинова Гульназ Минзахитовна',
                    exp: '9 лет',
                    spec: 'Мед. сестра',
                    photo: Muhamed
                },
                {
                    name: 'Набиуллин Азат Илгизович',
                    exp: '21 год 6 месяцев',
                    spec: 'Массажист'
                },
                {
                    name: 'Носова Людмилла Николаевна',
                    exp: '29 лет',
                    spec: 'Мед. сестра по массажу',
                    photo: Nosova
                },
                {
                    name: 'Сандимирова Елена Павловна',
                    exp: '1 год',
                    spec: 'Диет-сестра',
                    photo: Sandimirova
                },
                {
                    name: 'Сулейманова Гузэль Ингамовна',
                    exp: '38 лет',
                    spec: 'Врач-терапевт',
                    photo: Suleymanova
                },
                {
                    name: 'Ханнанова Альфия Альфатовна',
                    exp: '13 лет',
                    spec: 'Специалист по соц. работе',
                    photo: Hannova
                },
                {
                    name: 'Шарафутдинова Гульнур Салахеевна',
                    exp: '41 год',
                    spec: 'Мед. сестра',
                    photo: Shar
                }
            ]
        }
    }
}
</script>
