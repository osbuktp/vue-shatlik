<template>
    <wrap-menu>
        <section class="box">
            <h3 class="is-size-3">Количество свободных мест</h3>
            <form @submit="updateSpots" class="form">
                <div class="field">
                    <label class="label">В рамках предпринимательской деятельности</label>
                    <div class="control">
                        <input v-model="spots.business" class="input" type="number">
                    </div>
                </div>

                <div class="field">
                    <label class="label">По госзаданию (стационар)</label>
                    <div class="control">
                        <input v-model="spots.stac" class="input" type="number">
                    </div>
                </div>

                <div class="field">
                    <label class="label">По госзаданию (полустационар)</label>
                    <div class="control">
                        <input v-model="spots.semistac" class="input" type="number">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link">Обновить</button>
                    </div>
                </div>
            </form>
        </section>
    </wrap-menu>
</template>

<script>
import WrapMenu from "../../components/WrapMenu";
export default {
  components: {
    WrapMenu
  },
  data() {
    return {
      spots: {
        business: 0,
        stac: 0,
        semistac: 0
      }
    };
  },
  methods: {
    updateSpots() {
      const newSpots = this.spots;
      const updated = new Date();
      newSpots.updated = `${updated.getDate()}.${updated.getMonth()}.${updated.getFullYear()}`;
      console.log(JSON.stringify(newSpots));
      this.$http
        .put(
          "https://shatlik-staging.herokuapp.com/services/spots",
          JSON.stringify(newSpots)
        )
        .then(() => alert("Успешно обновлено"))
        .catch(err => console.dir(err));
    },
    fetchSpots() {
      this.$http
        .get("https://shatlik-staging.herokuapp.com/services/spots")
        .then(data => {
          this.spots = data.body;
        })
        .catch(err => console.dir(err.message));
    }
  },
  created() {
    this.fetchSpots();
  }
};
</script>