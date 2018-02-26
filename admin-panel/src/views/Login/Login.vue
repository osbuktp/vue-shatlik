<template>
    <section class="section tile is-ancestor">
        <div class="form is-3">
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input v-model="password" class="input" type="password" placeholder="Text input">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button @click="submit" class="button is-link">Submit</button>
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
            console.log("Auth failed")
        })
    }
  }
};
</script>

