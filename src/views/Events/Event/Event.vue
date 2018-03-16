<template>
    <div class="section">
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by9">
                    <img :src="post.main_image" alt="">
                </figure>
            </div>
            <div class="card-content">
                <div class="title">{{post.title}}</div>
                <div class="subtitle">{{post.date | toDate}}</div>
                <div class="content">
                    <div class="block" v-for="(block, id) in post.blocks" :key="id">
                        <p>{{block.text}}</p>
                        <lightbox :images="block.images"></lightbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import config from "../../../../admin-panel/src/config.js";
import Lightbox from "../../../components/Lightbox/Lightbox.vue";
export default {
  components: {
    Lightbox
  },
  data() {
    return {
      post: {
        title: "",
        date: "",
        main_image: "",
        small_text: "",
        blocks: []
      }
    };
  },
  created() {
    this.$http
      .get(`${config.BASEURL}/events/${this.$route.params.id}`)
      .then(resp => (this.post = resp.body))
      .catch(err => {
        console.log(err);
        this.$router.push("/");
      });
  }
};
</script>
