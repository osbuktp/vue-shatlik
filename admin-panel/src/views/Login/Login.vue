<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <form @submit.prevent="submit">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Пароль" v-model="password">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import config from '../../config.js';

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          `${config.BASEURL}/auth`,
          JSON.stringify({ password: this.password })
        )
        .then(() => {
          this.$router.push("/spots");
        })
        .catch(() => {
          console.log("Auth failed");
        });
    }
  }
};
</script>

