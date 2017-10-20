<template>
    <footer>
        <div class="footer-info">

        <div class="site-map">
            <p class="site-map__title">
                Карта сайта
            </p>
            <div class="site-map__wrapper">
            <div class="site-map__menu" v-for="(routeObj, route, id) in routes" :key="id">
            <router-link class="site-map__route" :to="route">{{routeObj.routeName}}</router-link>
            <router-link class="site-map__route site-map__sub-route" v-for="(subRouteObj, subRoute, subID) in routeObj.subRoutes" :key="subID" :to="route + subRoute">{{subRouteObj.routeName}}</router-link>
            </div>
            </div>
        </div>
        <div class="contacts">
            <p class="contacts__title">
                Контактные данные
            </p>
            <div class="email contacts-item">
                <p>email: 
                <a href="mailto:shatlykcsp@yandex.ru">shatlykcsp@yandex.ru</a></p>
            </div>
        </div>
        </div>
        <div class="credits">
            <p>ovv@2017</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";

footer {
  background-color: $primary-color;
  padding: 40px;
  color: $primary-color-text;
  font-size: 1.5rem;
  font-weight: 300;
  .footer-info {
  display: flex;
  flex-wrap: wrap;
  }
  .credits {
      text-align: center;
  }
  .contacts {
      text-align: right;
      .contacts-item {
          display: flex;
          justify-content: flex-end;
          p {
              margin: 5px 0px;
              text-align: right;
          }
      }
      .email a {
          color: inherit;
      }
  }
  .site-map, .contacts {
      margin-bottom: 50px;
      flex: 1;
  }
  .site-map__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: left;
    @media (min-width: $min-width) {
    height: 360px;
    }
  }
  .site-map__menu {
    padding-right: 40px;
  }
  .site-map__title, .contacts__title {
    font-size: 1.7rem;
  }
  .site-map__route {
    padding-top: 10px;
  }
  .site-map__route {
    font-size: 1.3rem;
    display: block;
    color: $primary-color-text;
    text-decoration: none;
  }
  .site-map__sub-route {
    padding-left: 30px;
  }
}
</style>

<script>
import routes from "../../routes.js";
export default {
  data() {
    return {
      routes: {}
    };
  },
  created() {
    this.routes = routes;
  }
};
</script>

