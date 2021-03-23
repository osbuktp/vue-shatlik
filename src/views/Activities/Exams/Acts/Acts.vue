<template>
  <section class="content section">
    <!-- <pdf src="/documents/activities/exams/acts/1.pdf" :page="1">
      <template slot="loading"> loading content here... </template></pdf
    > -->
    <div>
      <h2>АКТ проверки ОНД от 29.01.2020</h2>
      <object
        data="/documents/activities/exams/acts/АКТ проверки ОНД от 29.01.2020.pdf"
        type="application/pdf"
        width="100%"
        height="678"
        title="Рапорт"
      >
        <iframe
          src="/documents/activities/exams/acts/АКТ проверки ОНД от 29.01.2020.pdf"
          width="100%"
          height="678"
          title="Рапорт"
        >
          <p>This browser does not support PDF!</p>
        </iframe>
      </object>
      <h2>Акт проверки роспотребнадзор от 31.07.2019</h2>
      <object
        data="/documents/activities/exams/acts/Акт проверки роспотребнадзор от 31.07.2019.pdf"
        type="application/pdf"
        width="100%"
        height="678"
        title="Рапорт"
      >
        <iframe
          src="/documents/activities/exams/acts/Акт проверки роспотребнадзор от 31.07.2019.pdf"
          width="100%"
          height="678"
          title="Рапорт"
        >
          <p>This browser does not support PDF!</p>
        </iframe>
      </object>
      <h2>Представление прокуратуры от 29.12.2020</h2>
      <object
        data="/documents/activities/exams/acts/Представление прокуратуры от 29.12.2020.pdf"
        type="application/pdf"
        width="100%"
        height="678"
        title="Рапорт"
      >
        <iframe
          src="/documents/activities/exams/acts/Представление прокуратуры от 29.12.2020.pdf"
          width="100%"
          height="678"
          title="Рапорт"
        >
          <p>This browser does not support PDF!</p>
        </iframe>
      </object>
    </div>
    <img :src="img1" alt="" />
    <img :src="img2" alt="" />
    <img :src="img3" alt="" />
    <img :src="img4" alt="" />
    <img :src="img5" alt="" />
    <img :src="img6" alt="" />
    <img :src="img7" alt="" />
    <img :src="img8" alt="" />
    <img :src="img9" alt="" />
    <img :src="img10" alt="" />
    <img :src="img11" alt="" />
    <img :src="img12" alt="" />
  </section>
</template>

<script>
import img1 from "../../../../assets/проверки/акт проверки 1.jpg";
import img2 from "../../../../assets/проверки/акт проверки 2.jpg";
import img3 from "../../../../assets/проверки/акт проверки 3.jpg";
import img4 from "../../../../assets/проверки/акт проверки 4.jpg";
import img5 from "../../../../assets/проверки/акт проверки 5.jpg";
import img6 from "../../../../assets/проверки/акт проверки 6.jpg";
import img7 from "../../../../assets/проверки/акт проверки 7.jpg";
import img8 from "../../../../assets/проверки/акт проверки 8.jpg";
import img9 from "../../../../assets/проверки/предписание 1.jpg";
import img10 from "../../../../assets/проверки/предписание 2.jpg";
import img11 from "../../../../assets/проверки/предписание 3.jpg";
import img12 from "../../../../assets/проверки/предписание 4.jpg";

import pdf from "pdfvuer";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
    };
  },
};
</script>
