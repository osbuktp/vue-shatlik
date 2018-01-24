<template>
  <div>
    <header>
      <acc-panel></acc-panel>
      <section class="menu">
        <nav class="navbar is-info">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                <img src='../src/assets/logo.png' width="112" height="28">
              </router-link>
              <div :class="{'is-active': isMenuToggled}" @click="isMenuToggled = !isMenuToggled" class="navbar-burger burger" data-target="navMenuColorlink-example">
                <span></span>
                <span></span>
                <span></span>
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
          </div>
        </nav>
        <nav class="navbar is-info">
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
                    <!-- <router-link class="navbar-item" to="/about/conditions">
                      Условия приема
                    </router-link>
                    <router-link class="navbar-item" to="/about/rules">
                      Режим дня
                    </router-link> -->
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
                    <router-link class="navbar-item" to="/activities/rates">
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
          <div class="container">
            <div class="is-info hero-info">
              <h1 class="title">
                Шатлык
              </h1>
              <h2 class="subtitle">
                Центр социальной помощи
              </h2>
            </div>
          </div>
        </div>
      </section>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <section class="site-map">
        <menu class="menu">
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
              <a>Об учреждении</a>
              <ul>
                <li>
                  <router-link to="/about">
                    Общая информация
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="/about/conditions">
                    Условия приема
                  </router-link>
                </li>
                <li>
                  <router-link to="/about/rules">
                    Режим дня
                  </router-link>
                </li> -->
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
              <a>Услуги</a>
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
              <a>
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
                  <router-link to="/activities/rates">
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
      <section class="credentials">
        <div class="content has-text-centered">
          <p>
            <strong>os.buktp</strong>
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import AccPanel from "./components/AccPanel/AccPanel.vue";
export default {
  components: {
    AccPanel
  },
  name: "app",
  data() {
    return {
      isMenuToggled: false
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lobster");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700");
@import "~bulma/sass/utilities/initial-variables.sass";

body {
  font-family: "Source Sans Pro", "Open Sans", sans-serif;
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

.hero {
  background-image: url(./assets/house.jpg);
  background-position: center;
  background-size: cover;
  padding: 150px 0;
}
.hero-info {
  display: inline-block;
  background-color: rgba($cyan, 0.5);
  padding: 10px;
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
  background-color: $cyan;
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
</style>