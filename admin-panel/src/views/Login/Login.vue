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
      password: ''
    };
  },
  methods: {
    submit() {
      document.cookie = `password=${this.password}`;
      this.$router.push("/events");
    }
  }
};
</script>

