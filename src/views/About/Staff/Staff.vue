<template>
    <section class="section content">
        <h1>
            Специалисты
        </h1>
        <br>
        <div class="is-flex">
            <div class="card" v-for="(item, id) in staff" :key="id">
                <div class="card-image">
                    <img :src="'./' + item.photo" :alt="item.name">
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{item.name}}</p>
                            <p v-if="item.spec" class="subtitle is-6">{{item.spec}}</p>
                            <p v-if="item.exp" class="subtitle is-6">Стаж: {{item.exp}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.media-content {
  overflow: initial;
}
.is-flex {
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  flex-basis: 250px;
  margin-bottom: 20px;
}
</style>


<script>
import Sandimirova from "../../../assets/staff/sandimirova.jpg";
import Bataeva from "../../../assets/staff/bataeva.jpg";
import Larionova from "../../../assets/staff/larionova.jpg";
import Zaripova from "../../../assets/staff/zaripova.jpg";
import Kamalova from "../../../assets/staff/kamalova.jpg";
import Kashapova from "../../../assets/staff/kashapova.jpg";
import Kolobova from "../../../assets/staff/kolobova.jpg";
import Kuzmina from "../../../assets/staff/kuzmina.jpg";
import Muhamed from "../../../assets/staff/muh.jpg";
import Nosova from "../../../assets/staff/nosova.jpg";
import Komissarova from "../../../assets/staff/komissarova.jpg";
import Suleymanova from "../../../assets/staff/suleymanova.jpg";
import Hannova from "../../../assets/staff/hann.jpg";
import Shar from "../../../assets/staff/shar.jpg";
import Yar from '../../../assets/staff/yarullina.jpg';

export default {
  data() {
    return {
      staff: [
        {
          name: "Ларионова Лидия Николаевна",
          exp: "36 лет",
          spec: "Директор",
          photo: Larionova
        },
        {
          name: "Кузьмина Надежда Николаевна",
          spec: "Главный бухгалтер",
          photo: Kuzmina
        },
        {
          name: "Сулейманова Гузэль Ингамовна",
          exp: "38 лет",
          spec: "Врач-терапевт",
          photo: Suleymanova
        },
        {
          name: "Комиссарова Юлия Валерьевна",
          exp: "12 лет 6 месяцев",
          spec: "Психолог",
          photo: Komissarova
        },
        {
          name: "Камалова Венера Гизаровна",
          exp: "15 лет",
          spec: "Специалист по социальной работе",
          photo: Kamalova
        },
        {
          name: "Ханнанова Альфия Альфатовна",
          exp: "13 лет",
          spec: "Специалист по социальной работе",
          photo: Hannova
        },
        {
          name: "Зарипова Назиря Гиздатулловна",
          exp: "27 лет",
          spec: "Инструктор ЛФК",
          photo: Zaripova
        },
        {
          name: "Батаева Нина Ивановна",
          spec: "Сестра-хозяйка",
          photo: Bataeva
        },
        {
          name: "Сандимирова Елена Павловна",
          exp: "1 год",
          spec: "Диет-сестра",
          photo: Sandimirova
        },
        {
          name: "Носова Людмилла Николаевна",
          exp: "29 лет",
          spec: "Мед. сестра по массажу",
          photo: Nosova
        },
        {
          name: "Кашапова Салима Хусаиновна",
          spec: "Мед. сестра",
          photo: Kashapova
        },
        {
          name: "Мухаметдинова Гульназ Минзахитовна",
          exp: "9 лет",
          spec: "Мед. сестра",
          photo: Muhamed
        },
        {
          name: "Шарафутдинова Гульнур Салахеевна",
          exp: "41 год",
          spec: "Мед. сестра",
          photo: Shar
        },
        {
          name: "Яруллина Сирина Миннахметовна",
          spec: "Мед. сестра",
          photo: Yar
        },
        {
          name: "Колобова Татьяна Ивановна",
          photo: Kolobova
        }
      ]
    };
  }
};
</script>
