<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <form @submit="submit">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Пароль" v-model="password">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
          "https://shatlik-staging.herokuapp.com/auth",
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

