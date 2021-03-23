<template>
  <section class="content section">
    <h2>АКТ проверки ОНД от 17.03.2020</h2>
    <object
      data="/documents/activities/exams/reports/АКТ проверки ОНД от 17.03.2020.pdf"
      type="application/pdf"
      width="100%"
      height="678"
      title="Рапорт"
    >
      <iframe
        src="/documents/activities/exams/reports/АКТ проверки ОНД от 17.03.2020.pdf"
        width="100%"
        height="678"
        title="Рапорт"
      >
        <p>This browser does not support PDF!</p>
      </iframe>
    </object>
    <h2>отчет об устранении нарушений 30.10.2019</h2>
    <img :src="img2" />
    <h2>отчет об устранении нарушений по проверке прокуратуры от 11.01.2020</h2>
    <img :src="img3" />
    <img :src="img1" alt="" />
  </section>
</template>

<script>
import img1 from "../../../../assets/проверки/отчет об устранении замечаний.jpg";
import img2 from "../../../../assets/activities/exams/reports/отчет об устранении нарушений 30.10.2019.jpg";
import img3 from "../../../../assets/activities/exams/reports/отчет об устранении нарушений по проверке прокуратуры от 11.01.2020.jpg";
export default {
  data() {
    return {
      img1,
      img2,
      img3,
    };
  },
};
</script>
