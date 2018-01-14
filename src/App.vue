<template>
  <div>
    <header>
      <section class="menu">
        <nav class="navbar is-info">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item" to="/">
                <img src="./assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
              </router-link>
              <div :class="{'is-active': isMenuToggled}" @click="isMenuToggled = !isMenuToggled" class="navbar-burger burger" data-target="navMenuColorlink-example">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">Адрес</p>
                  <p class="control">Телефон</p>
                  <p class="control">Email</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav class="navbar is-info">
          <div :class="{'is-active': isMenuToggled}" class="navbar-menu">
            <div class="container">
              <div class="navbar-start">
                <router-link class="navbar-item" to="/">
                  Главная
                </router-link>
                <router-link to="/about" class="navbar-item">
                  Об учреждении
                </router-link>
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
                    <router-link class="navbar-item" to="/services/amount">
                      Численность получателей и объем предоставляемых социальных услуг
                    </router-link>
                    <router-link class="navbar-item" to="/services/spots">
                      Количество свободных мест
                    </router-link>
                    <router-link class="navbar-item" to="/services/complaints">
                      Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                    </router-link>
                  </div>
                </div>
                <router-link to="/activities" class="navbar-item">
                  Информация о деятельности
                </router-link>
                <router-link to="/events" class="navbar-item">
                  Проводимые мероприятия
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Say something loving
            </h1>
            <h2 class="subtitle">
              The xx
            </h2>
          </div>
        </div>
      </section>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <section class="section">
        <div class="container">
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
                  <router-link to="/about">
                    Об учреждении
                  </router-link>
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
                      <router-link to="/services/complaints">
                        Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/activities" class="navbar-item">
                    Информация о деятельности
                  </router-link>
                </li>
                <li>
                  <router-link to="/events" class="navbar-item">
                    Проводимые мероприятия
                  </router-link>
                </li>
              </ul>
            </menu>
          </section>
        </div>
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
export default {
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

body {
  font-family: "Source Sans Pro", "Open Sans", sans-serif;
}

.navbar-brand img {
  width: auto;
  margin: 10px;
  min-height: 5rem;
}

.navbar {
  min-height: 0;
}

.main .title {
  font-weight: 300;
}
</style>