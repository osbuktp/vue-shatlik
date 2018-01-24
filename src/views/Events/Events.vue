<template>
  <section class="section container content">
    <h1>
      Новости
    </h1>
    <div class="is-flex">
      <div class="card" v-for="post in posts" :key="post.id">
        <div class="card-image" v-if="post.attachment.type=='photo'">
          <img :src="post.attachment.photo.src_xbig" alt="">
        </div>
        <div class="card-content">
          <div class="content" v-html="post.text"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.is-flex {
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  &-image {
    width: 100%;
  }
  flex-basis: 500px;
  margin: 10px;
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