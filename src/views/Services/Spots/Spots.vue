<template>
    <section class="section content">
        <h1>Количество свободных мест</h1>
        <h2>
            Количество свободных мест в рамках предпринимательской деятельности
        </h2>
        <p>
            В АНО «ЦСП «Шатлык» («Радость») по состоянию на {{curDate}} в рамках предпринимательской деятельности свободных мест нет.
        </p>
        <h2>
            Количество свободных мест по госзаданию
        </h2>
        <p>
            Всем гражданам, обратившиеся в Центр за помощью, оказываются необходимые им социальные услуги согласно действующему законодательству.
        </p>
        <p>В АНО «ЦСП «Шатлык» («Радость») по состоянию на {{curDate}} свободных мест в стационаре и полустационаре нет.</p>

        <!-- <table class="table">
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
        </table> -->
        <p>
            <i>Обновлено {{curDate}}</i>
        </p>
    </section>
</template>

<script>
export default {
//   data() {
//     return {
//       spots: {
//         business: 0,
//         stac: 0,
//         semistac: 0,
//         updated: ""
//       }
//     };
//   },
  computed: {
      curDate() {
          let newDate = new Date()
          let parsedDate = {
              day: newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate(),
              month: newDate.getMonth() < 9 ? '0' + (newDate.getMonth()+1) : (newDate.getMonth()+1),
              year: newDate.getFullYear()
          }
          return `${parsedDate.day}.${parsedDate.month}.${parsedDate.year}`
      }
  }
//   computed: {
//     updatedTime() {
//       let updated = new Date(this.spots.updated);
//       console.log(updated.getMonth())
//       return `${updated.getDate()}.${updated.getMonth()+1}.${updated.getFullYear()}`;
//     }
//   },
//   methods: {
//     fetchSpots() {
//     //   let baseURL = "http://localhost:3000";
//       let baseURL = "https://shatlik-staging.herokuapp.com"
//       this.$http
//         .get(baseURL + "/services/spots")
//         .then(data => {
//           this.spots = data.body;
//         })
//         .catch(err => console.dir(err.message));
//     }
//   },
//   created() {
//     this.fetchSpots();
//   }
};
</script>
