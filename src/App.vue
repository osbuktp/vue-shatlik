<template>
  <div>
    <header>
      <acc-panel></acc-panel>
      <section class="menu">
        <nav class="navbar is-link">
          <!-- <div class="container"> -->
          <div class="navbar-brand">
            <router-link exact-active-class="someother" active-class="someother" class="navbar-item" to="/">
              <img src='../src/assets/logo.png' width="112" height="28">
            </router-link>
            <div :class="{'is-active': isMenuToggled}" @click="isMenuToggled = !isMenuToggled" class=" is-hidden-desktop navbar-burger burger" data-target="navMenuColorlink-example">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="navbar-start">
            <div class="navbar-item logo-text">
              <p>Автономная Некоммерческая Организация «Центр социальной помощи «Шатлык»</p>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped info-fields">
                <div class="info-field home">
                  <p>Адрес</p>
                  <p>г. Заинск, ул.Тукая, д. 5А</p>
                </div>
                <div class="info-field phone">
                  <p>Телефон</p>
                  <p>+7(85558)3-32-32</p>
                </div>
                <div class="info-field email">
                  <p>Email</p>
                  <p>shatlykcsp@yandex.ru</p>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </nav>
        <nav class="navbar is-link">
          <div :class="{'is-active': isMenuToggled}" class="navbar-menu">
            <div class="container">
              <div class="navbar-start navbar-overflow">
                <router-link class="navbar-item" to="/">
                  Главная
                </router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Об учреждении
                  </a>
                  <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/about">
                      Общая информация
                    </router-link>
                    <router-link class="navbar-item" to="/about/lead">
                      Руководство
                    </router-link>
                    <router-link class="navbar-item" to="/about/staff">
                      Персональный состав работников
                    </router-link>
                    <router-link class="navbar-item" to="/about/documents">
                      Документы
                    </router-link>
                    <router-link class="navbar-item" to="/about/equipment">
                      Материально-техническое обеспечение
                    </router-link>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Услуги
                  </a>
                  <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/services">
                      Предоставляемые услуги
                    </router-link>
                    <router-link class="navbar-item" to="/services/conditions">
                      Порядок и условия предоставления социальных услуг
                    </router-link>
                    <router-link class="navbar-item" to="/services/rates">
                      Тарифы на социальные услуги
                    </router-link>
                    <router-link class="navbar-item" to="/services/amount">
                      Численность получателей и объем предоставляемых социальных услуг
                    </router-link>
                    <router-link class="navbar-item" to="/services/spots">
                      Количество свободных мест
                    </router-link>
                    <router-link class="navbar-item" to="/services/experience">
                      Опыт работы
                    </router-link>
                    <router-link class="navbar-item" to="/services/complaints">
                      Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                    </router-link>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Информация о деятельности
                  </a>
                  <div class="navbar-dropdown">
                    <router-link class="navbar-item" to="/activities/reports">
                      Отчеты о деятельности
                    </router-link>
                    <router-link class="navbar-item" to="/activities/exams">
                      Проверки
                    </router-link>
                    <router-link class="navbar-item" to="/activities/rating">
                      Независимая оценка качества оказания услуг
                    </router-link>
                  </div>
                </div>

                <router-link to="/events" class="navbar-item">
                  Мероприятия
                </router-link>
                <router-link to="/interrogation" class="navbar-item">
                  Опрос о качестве услуг
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section class="hero is-info">
        <div class="hero-body">
          <!-- <div class="container">
            <div class="is-info hero-info">
              <h1 class="title">
                Шатлык
              </h1>
              <h2 class="subtitle">
                Центр социальной помощи
              </h2>
            </div>
          </div> -->
          <div class="slider">
            <ul class="slides" :style="style">
              <li v-for="(slide,i) in playslides" :key="i">
                <div class="img" :style="{ backgroundImage: `url(${slide.img})` }"></div>
              </li>
            </ul>
            <ul class="indicators">
              <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
                <div class="item">
                  <span class="title">{{slide.title}}</span>
                  <!-- <span class="progress">
                    <div class="fill" :style="{ width: `${percent}%`}"></div>
                    <div class="dot"></div>
                  </span> -->
                  <!-- <p class="mark">{{slide.mark}}</p> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>

    <main>
      <section class="left-aside is-hidden-touch">
        <section class="site-map">
          <menu class="menu card">
            <p class="menu-label">
              Карта сайта
            </p>
            <ul class="menu-list">
              <li>
                <router-link to="/">
                  Главная
                </router-link>
              </li>
              <li>
                <a expandable :opened="isAboutOpened" @click="isAboutOpened = !isAboutOpened">
                  Об учреждении
                </a>
                <ul>
                  <li>
                    <router-link to="/about">
                      Общая информация
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/about/lead">
                      Руководство
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/about/staff">
                      Персональный состав работников
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/about/documents">
                      Документы
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/about/equipment">
                      Материально-техническое обеспечение
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a expandable :opened="isServicesOpened" @click="isServicesOpened = !isServicesOpened">
                  Услуги
                </a>
                <ul>
                  <li>
                    <router-link to="/services">
                      Предоставляемые услуги
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/conditions">
                      Порядок и условия предоставления социальных услуг
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/rates">
                      Тарифы на социальные услуги
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/amount">
                      Численность получателей и объем предоставляемых социальных услуг
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/spots">
                      Количество свободных мест
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/experience">
                      Опыт работы
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/complaints">
                      Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a expandable :opened="isActivitiesOpened" @click="isActivitiesOpened = !isActivitiesOpened">
                  Информация о деятельности
                </a>
                <ul>
                  <li>
                    <router-link to="/activities/reports">
                      Отчеты о деятельности
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/activities/exams">
                      Проверки
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/activities/rating">
                      Независимая оценка качества оказания услуг
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/events">
                  Проводимые мероприятия
                </router-link>
              </li>
              <li>
                <router-link to="/interrogation">
                  Опрос граждан о качестве оказания услуг
                </router-link>
              </li>
            </ul>
          </menu>
        </section>
      </section>

      <section id="content">
        <router-view></router-view>
      </section>

      <section class="right-aside is-hidden-touch">
        <menu class="menu card">
          <p class="menu-label">
            Мы в соцсетях
          </p>

          <!-- VK Widget -->
          <div id="vk_groups"></div>
        </menu>
        <menu class="menu card">
          <p class="menu-label">
            Часто задаваемые вопросы
          </p>
          <f-a-q></f-a-q>
        </menu>
      </section>
    </main>

    <footer class="footer">

      <section class="credentials">
        <div class="content has-text-centered">
          <p>
            <strong>АНО ЦСП «ШАТЛЫК»</strong>
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import FAQ from "./components/FAQ/FAQ.vue";
import AccPanel from "./components/AccPanel/AccPanel.vue";

import house from "./assets/house.jpg";
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.png";
import slider3 from "./assets/slider3.png";

export default {
  components: {
    AccPanel,
    FAQ
  },
  name: "app",
  data() {
    return {
      isMenuToggled: false,
      isAboutOpened: false,
      isServicesOpened: false,
      isActivitiesOpened: false,
      slides: [
        {
          img: house,
          title: "АНО ЦСП «Шатлык»"
        },
        {
          img: slider1,
          title: "Наслаждайтесь уникальной природой"
        },
        {
          img: slider2,
          title: "Комплексное медицинское обслуживание"
        },
        {
          img: slider3,
          title: "Комфортное проживание и высокий уровень сервиса"
        }
      ],
      current: 0,
      percent: 0,
      timer: 0,
      interval: 0,
      progress: 0,
      duration: 5000,
      playslides: []
    };
  },
  computed: {
    style() {
      switch (this.current % 2) {
        case 0:
          return { top: "0" };
        case 1:
          return { top: "-100%" };
      }
    }
  },
  methods: {
    selectSlide(i) {
      this.current = i;
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    process() {
      this.current++;
      if (this.current >= this.slides.length) {
        this.current = 0;
      }
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    going() {
      let time = new Date().getTime();
      this.percent = Math.floor(100 * (time - this.timer) / this.duration);
    },
    resetPlay() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      this.play();
    },
    stop() {
      clearInterval(this.interval);
      clearInterval(this.progress);
    },
    play() {
      this.timer = new Date().getTime();
      this.progress = setInterval(this.going, this.duration / 100);
      this.interval = setInterval(this.process, this.duration);
    }
  },
  created() {
    this.playslides[0] = this.slides[0];
    this.playslides[1] = this.slides[1];
    this.play();
  }
};
// methods: {
//   scrollToContent() {
//     let interval = document.querySelector("#content").offsetTop;
//     let timer = setInterval(function() {
//       if (window.scrollY < interval - 48) {
//         window.scrollBy(0, 50);
//       } else {
//         clearInterval(timer);
//       }
//     }, 15);
//   }
// }
</script>

<style lang="sass" scoped>
.slider
  position: relative
  z-index: 1
  overflow: hidden
  height: 650px
  ul
    list-style: none
    &.slides
      position: absolute
      width: 100%
      height: 100%
      margin: 0
      padding: 0
      transition: top 500ms
      li
        height: 100%
        .img
          height: 100%
          background-size: cover
          background-position: 50%
    &.indicators
      position: absolute
      padding-right: 20px
      right: 0
      top: 50%
      transform: translateY(-50%)
      z-index: 2
      text-align: right
      li
        clear: both
        .item
          position: relative
          margin-bottom: 16px
          float: right
          padding: 10px 20px
          background-color: rgba(#3273dc, 0.7)
        &:last-child
          .item
            margin-bottom: 0
        .title
          text-transform: uppercase
          font-weight: 400
          color: #fff
          cursor: pointer
          font-size: 16px
          // font-family: 'SegoeUI-Bold'
          transition: font-size 0.5s ease
        .mark
          color: #fff
          // font-family: 'SegoeUI-Semilight'
        .dot
          position: absolute
          top: 50%
          right: -20px
          margin-top: -5.5px
          margin-left: 10px
          width: 11px
          height: 11px
          background: #fff
          border-radius: 50%
        .progress
          position: relative  
          display: inline-block
          width: 100%
          height: 2px
          margin: 8px 0
          background: rgba(255, 255, 255, .5)
        &.active
          .title
            transition: font-size 0.5s ease
            font-size: 36px
            // font-family: 'SegoeUI-Light'
          .progress .fill
            height: 100%
            background: #fff
  @media (min-width: 1024px)
    max-height: 60vh
    ul
      &.indicators
        padding-right: 70px
</style>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lobster");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700");
@import "~bulma/sass/utilities/initial-variables.sass";

body {
  font-family: "Source Sans Pro", "Open Sans", sans-serif;
}

.logo-text {
  width: 320px;
  color: white;
}
.navbar {
  flex-wrap: wrap;
}

.navbar > .container {
  flex-wrap: wrap;
}

.navbar-link,
.navbar-item {
  text-transform: uppercase;
}

.navbar-overflow {
  flex-wrap: wrap;
}

// .navbar-item + a{
//   display: block;
//   max-width: 300px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// }

// .hero {
//   background-image: url(./assets/house.jpg);
//   background-position: center;
//   background-size: cover;
//   padding: 100px 0;
// }
// .hero-info {
//   display: inline-block;
//   background-color: rgba($blue, 0.5);
//   padding: 10px;
// }
.hero-body {
  padding: 0;
}

.navbar-brand img {
  width: auto;
  margin: 10px;
  min-height: 5rem;
}

.navbar {
  min-height: 0;
}

.info-field {
  color: white;
}

.info-fields {
  display: flex;
  flex-wrap: wrap;
}
.info-field {
  position: relative;
  padding: 10px 30px;
  margin: 16px 10px;
  flex: 1;
  border: 2px solid white;
  border-radius: 4px;
}
.info-field::before {
  content: "";
  z-index: 999;
  display: inline-block;
  position: absolute;
  top: calc(50% - 16px);
  left: -17px;
  background-color: $blue;
  width: 32px;
  height: 32px;
  background-position: center;
  background-size: cover;
}
.home::before {
  background-image: url("./assets/svg/home.svg");
}
.phone::before {
  background-image: url("./assets/svg/phone.svg");
}
.email::before {
  background-image: url("./assets/svg/email.svg");
}
.main .title {
  font-weight: 300;
}

.left-aside,
.right-aside {
  padding: 3rem 0;
  width: 320px;
}

.left-aside {
  padding-left: 20px;
}

.right-aside {
  padding-right: 20px;
}

#content {
  flex: 1;
}

// .site-map {
//   padding: 0 20px;
// }
menu {
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  // box-sizing: border-box;
  .menu-label {
    font-size: 1rem;
    background-color: #3273dc;
    color: white;
    padding: 10px;
    margin-bottom: 0 !important;
  }
  .menu-label + * {
    padding: 10px;
  }
  #vk_groups {
    padding: 0;
  }
}

main {
  display: flex;
}

a[expandable]::before {
  background-image: url(./assets/svg/right.svg);
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-position: center 0.15rem;
  background-size: cover;
}

a[expandable][opened]::before {
  background-image: url(./assets/svg/down.svg);
}

a + ul {
  display: none;
}

a[opened="true"] + ul {
  display: block;
}
</style>