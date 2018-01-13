<template>
  <div>
    <header>
      <section class="menu">
        <nav class="navbar is-link">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="./assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div :class="{'is-active': isMenuToggled}" @click="isMenuToggled = !isMenuToggled" class="navbar-burger burger" data-target="navMenuColorlink-example">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenuColorlink-example" :class="{'is-active': isMenuToggled}" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Главная
              </a>
              <a href="#" class="navbar-item">
                Об учреждении
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/documentation/overview/start/">
                  Услуги
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/documentation/overview/start/">
                    Предоставляемые услуги
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Порядок и условия предоставления социальных услуг
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Численность получателей и объем предоставляемых социальных услуг
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Количество свободных мест
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                  </a>
                </div>
              </div>
              <a href="#" class="navbar-item">
                Информация о деятельности
              </a>
              <a href="#" class="navbar-item">
                Проводимые мероприятия
              </a>
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
    <main class="main">
      <section class="section reasons">
        <div class="container">
          <h1 class="title has-text-centered">
            10 причин
          </h1>
        </div>
      </section>
      <section class="section excursion">
        <div class="container">
          <h1 class="title has-text-centered">
            Экскурсия по санаторию
          </h1>
        </div>
      </section>
      <section class="section faq">
        <div class="container">
          <h1 class="title has-text-centered">
            Часто задаваемые вопросы
          </h1>
        </div>
      </section>
      <section class="section yandex-map">
        <div class="container">
          <h1 class="title has-text-centered">
            Мы на YandexMaps
          </h1>
        </div>
      </section>
    </main>
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
                  <a>Главная</a>
                </li>
                <li>
                  <a>Об учреждении</a>
                </li>
                <li>
                  <a>Услуги</a>
                  <ul>
                    <li>
                      <a>Предоставляемые услуги</a>
                    </li>
                    <li>
                      <a>Порядок и условия предоставления социальных услуг</a>
                    </li>
                    <li>
                      <a>Численность получателей и объем предоставляемых социальных услуг</a>
                    </li>
                    <li>
                      <a>
                        Количество свободных мест
                      </a>
                    </li>
                    <li>
                      <a>
                        Порядок подачи жалобы получателем социальных услуг по вопросам качества оказания социальных услуг
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Информация о деятельности</a>
                </li>
                <li>
                  <a>Проводимые мероприятия</a>
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
@import url('https://fonts.googleapis.com/css?family=Lobster');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700');


body {
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
}

.navbar-brand img {
  width: auto;
  margin: 10px;
  min-height: 5rem;
}

.main .title {
  font-weight: 300;
}
</style>