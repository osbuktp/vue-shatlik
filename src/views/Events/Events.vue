<template>
    <section class="section container">
        <div class="box" v-for="post in posts" :key="post.id">
            <article class="media">
            <div class="media-left">
                <div class="img-wrapper" v-for="att in post.attachments" v-if="att.type == 'photo'" :key="att.photo.pid">
                    <img :src="att.photo.src_xbig" alt="">
                </div>
            </div>
            <div class="media-content" v-html="post.text">
            </div>
            </article>
        </div>
    </section>
</template>


<style lang="scss">
.media-left {
    display: flex;
    flex-wrap: wrap;
    width: 500px
}
.img-wrapper {
    flex-grow: 1;
    overflow: hidden;
    flex-basis: 240px;
    max-height: 180px;
    padding: 5px;
    &:first-child {
        flex-basis: 480px;
        max-height: 360px
    }
    img {
        margin-top: auto;
        margin-bottom: auto;
        height: auto;
        min-width: 100%;
    }
}
</style>



<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    fetchPosts() {
      this.$http
        .jsonp(
          `https://api.vk.com/method/wall.get?domain=shatlyk_zainsk&count=5&access_token=37160b5937160b5937160b59473776b7f03371637160b596d755e1a6707659160c266f6`
        )
        .then(resp => {
          let respBody = resp.body.response;
          respBody.shift();
          this.posts = respBody;
        });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>
