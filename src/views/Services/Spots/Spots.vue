<template>
    <section class="section content">
        <h1>Количество свободных мест</h1>
        <h2>
            Количество свободных мест в рамках предпринимательской деятельности
        </h2>
        <p>
            В рамках предпринимательской деятельности свободных мест нет.
        </p>
        <h2>
            Количество свободных мест по госзаданию
        </h2>
        <p>
            Всем гражданам, обратившиеся в Центр за помощью, оказываются необходимые им социальные услуги согласно действующему законодательству.
        </p>

        <table class="table">
            <thead>
                <tr>
                    <td></td>
                    <td>Количество мест</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        В рамках предпринимательской деятельности
                    </td>
                    <td>
                        {{spots.business}}
                    </td>
                </tr>
                <tr>
                    <td>
                        По госзаданию на стационарной основе
                    </td>
                    <td>
                        {{spots.stac}}
                    </td>
                </tr>
                <tr>
                    <td>
                        По госзаданию на полустационарной основе
                    </td>
                    <td>
                        {{spots.semistac}}
                    </td>
                </tr>
            </tbody>
        </table>
        <p>
            <i>Обновлено {{updatedTime}}</i>
        </p>
    </section>
</template>

<script>
export default {
  data() {
    return {
      spots: {
        business: 0,
        stac: 0,
        semistac: 0,
        updated: ""
      }
    };
  },
  computed: {
    updatedTime() {
      let updated = new Date(this.spots.updated);
      console.log(updated.getMonth())
      return `${updated.getDate()}.${updated.getMonth()+1}.${updated.getFullYear()}`;
    }
  },
  methods: {
    fetchSpots() {
    //   let baseURL = "http://localhost:3000";
      let baseURL = "https://shatlik-staging.herokuapp.com"
      this.$http
        .get(baseURL + "/services/spots")
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
