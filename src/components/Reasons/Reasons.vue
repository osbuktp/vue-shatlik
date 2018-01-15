<template>
    <div class="reasons-slider">
        <div @click="toggleReason(reason.id)" class="reason" :class="{ 'reason_opened': currentReasonId == reason.id }" v-for="reason in reasons" :key="reason.id" :style="{'background-image': 'url(./' + reason.background + ')'}">
            <div class="reason-title">
                <p>{{ reason.id }}</p>
            </div>
            <div class="reason-desc">
                <p class="reason-desc__title">
                    Причина №{{ reason.id }}: {{ reason.name }}
                </p>
                <div class="reason-desc__text" v-html="reason.desc">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

.reasons-slider {
  display: flex;
  flex-direction: column;
  @include desktop {
    flex-direction: row;
  }
}

.reason {
  filter: sepia(50%);
  padding: 20px;
  background: transparent;
  background-size: cover;
  background-position: center;
  color: white;
  p,
  li {
    // font-size: 1.4rem;
    margin: 0;
  }
  &-desc {
    display: none;
    background-color: rgba(25, 118, 210, 0.8);
    padding: 10px;
    box-sizing: border-box;
    p {
      margin-bottom: 1rem;
    }
  }
  @include desktop {
    flex: 1;
    cursor: pointer;
    overflow: hidden;
    transition: flex-basis 0.5s ease, filter 0.5s ease;
    box-sizing: border-box;
    &:hover {
      filter: sepia(0);
    }
    p {
      margin-bottom: 1rem;
    }
    &-desc {
      display: block;
      width: 560px;
      margin-left: auto;
      margin-right: auto;
      overflow-x: hidden;
      opacity: 0;
      transition: opacity 0.5s ease, margin 0.5s ease;
    }
    &-title {
      text-align: center;
      font-family: "Lobster", sans-serif;
      transition: opacity 0.5s ease, max-height 0.5s ease;
      max-height: 2.4rem;
      overflow: hidden;
      p {
        height: 1.4rem;
      }
    }
  }
}

.reason_opened {
  &.reason {
    filter: sepia(0);
  }
  .reason-desc {
    display: block;
  }
  .reason-title {
    display: none;
  }
  @include desktop {
    &.reason {
      flex-basis: 600px;
    }
    .reason-desc {
      transition-delay: 0.5s;
      opacity: 1;
      margin: 1.2rem auto;
    }
    .reason-title {
      display: block;
      max-height: 0rem;
      opacity: 0;
      transition-delay: 0.5s;
      margin: 0;
    }
  }
}
</style>

<script>
import r1 from "../../assets/reasons/1.jpg";
import r2 from "../../assets/reasons/2.jpg";
import r3 from "../../assets/reasons/3.jpg";
import r4 from "../../assets/reasons/4.jpg";
import r5 from "../../assets/reasons/5.jpg";
import r6 from "../../assets/reasons/6.jpg";
import r7 from "../../assets/reasons/7.jpg";
import r8 from "../../assets/reasons/8.jpg";
import r9 from "../../assets/reasons/9.jpg";
import r10 from "../../assets/reasons/10.jpg";

export default {
  methods: {
    toggleReason(id) {
      this.currentReasonId = id;
    }
  },
  data() {
    return {
      currentReasonId: 1,
      reasons: [
        {
          id: 1,
          name: "Высокий уровень сервиса",
          desc: `
                    <p>За время пребывания в центре обеспечивается высокий оздоровительный эффект за счёт качественного социально-медицинского обслуживания и высокого уровня сервиса.</p>
                    `,
          background: r1
        },
        {
          id: 2,
          name: "Обслуживание по высоким стандартам",
          desc: `
                    <p>Мы обслуживаем всех получателей услуг по высоким стандартам, как в части социально- медицинского обслуживания, так размещения и питания.В центре имеются номера повышенной комфортности.</p>
                    `,
          background: r2
        },
        {
          id: 3,
          name: "Медицинские кадры",
          desc: `
                    <p>Ваше здоровье станет предметом заботы медицинского персонала из врача- терапевта и 8 сотрудников среднего медицинского персонала, а так же психолога и специалистов по социальной работе.</p>
                    <p>Сочетая практическую лечебную работу с индивидуальным подходом они достигают высоких показателей в эффективности оказания медицинской помощи.</p>`,
          background: r3
        },
        {
          id: 4,
          name: "Природный фактор",
          desc: `
                    <p>Центр «Шатлык» расположен в самом живописном и уютном уголке города Заинск. Рядом с центром расположился парк имени Р.Фардиева.</p>
                    <p>Уникальный природный ландшафт рекреационной парковой зоны с многочисленными прогулочными дорожками, настоящим озером на территории, где обитают гуси и утки, создает для гостей центра атмосферу спокойствия и умиротворения.</p>`,
          background: r4
        },
        {
          id: 5,
          name: "Широкий медицинский профиль",
          desc: `
                    <ul>
                    <li>заболевания сердечно-сосудистой системы</li>
                    <li>заболевания органов дыхания</li>
                    <li>расстройства нервной системы</li>
                    <li>заболевания опорно-двигательного аппарата</li>
                    </ul>
                    <p>Широкий спектр лечебных медицинских программ позволит подобрать для Вас наиболее оптимальный комплекс лечения. В заключение Вы получите рекомендации с учетом индивидуальных особенностей лечения Вашей болезни.</p>
                    `,
          background: r5
        },
        {
          id: 6,
          name: "Развитая инфраструктура",
          desc: `
                    <p>Комфортное размещение получателей услуг и гостей в современном гостиничном формате, дружественный персонал, а также различные спортивно-оздоровительные программы и возможности активного отдыха, такие как плавание, занятия в тренажёрном зале, скандинавская ходьба реально оздоравливают и в дальнейшем исцеляют пациентов, мобилизуют их на активный жизненный ритм и вне стен центра.</p>
                    <ul>
                    <li>Номерной фонд от стандарта, до номеров класса люкс</li>
                    <li>Автостоянка/Парковка</li>
                    <li>Сауна</li>
                    <li>Крытый плавательный бассейн</li>
                    <li>Тренажерный зал</li>
                    <li>Столовая</li>
                    <li>Фито-бар</li>
                    </ul>`,
          background: r6
        },
        {
          id: 7,
          name: "Широкий спектр предоставляемых услуг",
          desc: `<ul>
                    <li>социально-медицинские</li>
                    <li>социально-педагогические</li>
                    <li>социально-психологические</li>
                    <li>социально-правовые</li>
                    <li>социально-бытовые</li>
                    <li>социально-трудовые</li>
                    </ul>`,
          background: r7
        },
        {
          id: 8,
          name: "Доступность",
          desc: `<p>Центр «Шатлык» расположен в киломерте от Альметьевского шоссе.</p>`,
          background: r8
        },
        {
          id: 9,
          name: "Экспресс-диагностика",
          desc: `<p>Благодаря наличию кардиоритмографа, получатели услуг могут оценить функциональное состояние вегетативной и сердечно-сосудистой системы. Основные области применения диагностики: отслеживание результатов и дозирование реабилитационных упражнений и физиотерапевтических процедур.</p>`,
          background: r9
        },
        {
          id: 10,
          name: "Правильное питаниe",
          desc: `<p>Меню для получателей услуг разрабатывается в соответствии с картотекой блюд (лечебного и профилактического) питания.</p>
                    <p>В центре работает фито-бар, где здоровье отдыхающих укрепляется кислородным и витаминным коктейлями, а также настоями из трав.</p>`,
          background: r10
        }
      ]
    };
  }
};
</script>

