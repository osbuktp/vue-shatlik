<template>
    <wrap-menu>
        <section class="box">
            <nav class="panel">
                <p class="panel-heading">
                    Список мероприятий
                </p>
                <div class="panel-block">
                    <router-link to="/events/new" class="button is-link is-outlined is-fullwidth">
                        Добавить +
                    </router-link>
                </div>
                <router-link :to="'/events/' + post.id" v-for="post in posts" :key="post.id" class="panel-block">
                        {{post.id}}. {{post.title}}
                </router-link>
            </nav>
        </section>
    </wrap-menu>
</template>

<script>
import WrapMenu from "../../components/WrapMenu";
import config from "../../config.js";
export default {
  components: {
    WrapMenu
  },
  data() {
    return {
      posts: []
    };
  },
  beforeCreate() {
    this.$http
      .get(`${config.BASEURL}/events/all`)
      .then(res => (this.posts = res.body))
      .catch(err => console.log(err));
  }
};
</script>

