<template>
  <section class="section content">
    <header>
      <h1>АНО «Центр социальной помощи «Шатлык» («Радость»)</h1>
    </header>
    <blockquote>
      <h3>Диагностика, реабилитация и отдых для тех, кто ценит качество жизни</h3>
    </blockquote>
    <p>
      Центр социальной помощи «Шатлык» расположен в самом живописном и уютном уголке города Заинск. Экологически благоприятная зона и высокая квалификация медицинского персонала позволяют нам гарантировать хорошие результаты при терапии различных заболеваний.
    </p>
    <p>
      Мы предлагаем стационарную и полустационарную форму лечения. Стационар рассчитан на 10 койко-мест (имеются дополнительные 6 платных койко- мест) и дневного пребывания 18 полустационарных мест.
    </p>
    <article>
      <header>
        <h3>
          Инфраструктура
        </h3>
      </header>
      <table class="table">
        <tr>
          <td>
            Номерной фонд от стандарта до номеров класса люкс
          </td>
        </tr>
        <tr>
          <td>
            Автостоянка / Парковка
          </td>
        </tr>
        <tr>
          <td>
            Сауна
          </td>
        </tr>
        <tr>
          <td>
            Крытый плавательный бассейн
          </td>
        </tr>
        <tr>
          <td>
            Тренажерный зал
          </td>
        </tr>
        <tr>
          <td>
            Столовая
          </td>
        </tr>
        <tr>
          <td>
            Фито-бар
          </td>
        </tr>
      </table>
    </article>
    <article>
      <header>
        <h3>Оздоровительная Инфраструктура</h3>
      </header>
      <table class="table">
        <tr>
          <td>
            Физиокабинеты
          </td>
        </tr>
        <tr>
          <td>
            Массажный кабинет
          </td>
        </tr>
        <tr>
          <td>
            Зал ЛФК
          </td>
        </tr>
        <tr>
          <td>
            Ингаляторий
          </td>
        </tr>
        <tr>
          <td>
            Спелеокамера
          </td>
        </tr>
        <tr>
          <td>
            Сенсорная комната
          </td>
        </tr>
      </table>
    </article>
    <article>
      <p>
        Терапия включает в себя различные методы: массаж, магниотерапия, парафино-лечение, гирудотерапия. Вы сможете забыть про многие недуги, очистите организм от токсинов и шлаков, попарившись в сауне. Пребывание в спелеокамере (солевой пещере) и сенсорной комнате помогут укрепить нервную и сердечно-сосудистую систему, и вы станете полны сил и здоровья!
      </p>
      <p>
        Все, кто посетил центр, остаются очень довольны результатами лечения. Наше медицинское оборудование – на самом высоком уровне. Это дает возможность оперативно контролировать состояние пациентов и наблюдать за ходом лечения.
      </p>
      <p>
        Заинск – небольшой и зеленый город. Устав от напряженного ритма жизни, вы можете комфортно отдохнуть в центре "Шатлык". Здесь удачно совмещаются мощная лечебная база и возможности оздоровления.
      </p>
    </article>
    <article>
      <h2>Мы на YandexMaps</h2>
      <yandex-map></yandex-map>
    </article>
    <article>
      <h2>Фотогалерея</h2>
      <lightbox :images="maingal"></lightbox>
    </article>
    <blockquote>
      <h3>Заинск ждет Вас!</h3>
      <h4>
        Приезжайте в наш центр, чтобы набраться сил и здоровья!
      </h4>
    </blockquote>
  </section>
  <!-- <section class="main">
    <section class="excursion">
      <h1 class="title has-text-centered">
        Экскурсия по санаторию
      </h1>
      <main-gallery></main-gallery>
    </section>
    <section class="faq">
      <h1 class="title has-text-centered">
        Часто задаваемые вопросы
      </h1>
      <f-a-q></f-a-q>
    </section>
    <section class="yndxmap">
      <h1 class="title has-text-centered">
        Мы на YandexMaps
      </h1>
      <yandex-map></yandex-map>
    </section>
  </section> -->
</template>

<style lang="scss" scoped>
.alter-text {
  color: #209cee;
}
article {
  margin-bottom: 30px;
}
// .main {
//   section {
//     margin-top: 40px;
//   }
// }
//
</style>

<style lang="scss">
.lightbox-list {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    flex: 1;
    flex-basis: 350px;
    .img-thumb {
      width: 100% !important;
    }
  }
}
</style>


<script>
// import MainGallery from "../../components/MainGallery/MainGallery.vue";
// import FAQ from "../../components/FAQ/FAQ.vue";
import YandexMap from "../../components/YandexMap/YandexMap.vue";
import Lightbox from "../../components/Lightbox/Lightbox.vue";

import img1 from "../../assets/maingallery/mg1.jpg";
import img2 from "../../assets/maingallery/mg2.jpg";
import img3 from "../../assets/maingallery/mg3.jpg";
import img4 from "../../assets/maingallery/mg4.jpg";
import img5 from "../../assets/maingallery/mg5.jpg";
import img6 from "../../assets/maingallery/mg6.jpg";
import img7 from "../../assets/maingallery/mg7.jpg";
import img8 from "../../assets/maingallery/mg8.jpg";
import img9 from "../../assets/maingallery/mg9.jpg";
import img10 from "../../assets/maingallery/mg10.jpg";

export default {
  components: {
    // MainGallery,
    // FAQ,
    YandexMap,
    Lightbox
  },
  data() {
    return {
      maingal: [
        { src: img1, thumb: img1 },
        { src: img2, thumb: img2 },
        { src: img3, thumb: img3 },
        { src: img4, thumb: img4 },
        { src: img5, thumb: img5 },
        { src: img6, thumb: img6 },
        { src: img7, thumb: img7 },
        { src: img8, thumb: img8 },
        { src: img9, thumb: img9 },
        { src: img10, thumb: img10 }
      ]
    };
  }
};
//
</script>
