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
import Zaripova from "../../../assets/staff/zaripova.jpg";
import Kolobova from "../../../assets/staff/kolobova.jpg";
import Muhamed from "../../../assets/staff/muh.jpg";
import Suleymanova from "../../../assets/staff/suleymanova.jpg";
import Hannova from "../../../assets/staff/hann.jpg";
import Kurbatova from "../../../assets/staff/director.jpg"
import Filipovskaya from "../../../assets/staff/filipovskaya.jpg"
import Koronova from "../../../assets/staff/koronova.jpg"
import Seliverstova from "../../../assets/staff/seliverstova.jpg"
import Fateeva from '../../../assets/staff/fateeva.jpg'
import Rud from '../../../assets/staff/rud.jpg'

export default {
  data() {
    return {
      staff: [
        {
          name: "Курбатова Гузелия Фатыховна",
          exp: "22 года",
          spec: "Директор",
          photo: Kurbatova
        },
        {
          name: "Сулейманова Гузэль Ингамовна",
          exp: "38 лет",
          spec: "Врач-терапевт",
          photo: Suleymanova
        },
        {
          name: "Коронова Нина Николаевна",
          exp: "24 года",
          spec: "Главный бухгалтер",
          photo: Koronova
        },
        {
          name: "Фатеева Вера Юрьевна",
          spec: "Психолог",
          photo: Fateeva
        },
        {
          name: "Филиповская Дарья Александровна",
          exp: "18 лет",
          spec: "Специалист по социальной работе",
          photo: Filipovskaya
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
          name: "Сандимирова Елена Павловна",
          exp: "1 год",
          spec: "Диет-сестра",
          photo: Sandimirova
        },
        {
          name: "Селиверстова Татьяна Михайловна",
          exp: "39 лет",
          spec: "Мед. сестра" ,
          photo: Seliverstova
        },
        {
          name: "Мухаметдинова Гульназ Минзахитовна",
          exp: "9 лет",
          spec: "Мед. сестра",
          photo: Muhamed
        },
        {
          name: "Рудь Юлия Владимировна",
          spec: "Муд. сестра",
          photo: Rud
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
