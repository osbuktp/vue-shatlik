<template>
  <section class="section content">
    <h1>
      Мероприятия
    </h1>
    <div class="is-flex">
      <div class="card" v-for="post in posts" :key="post.id">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="post.main_image" alt="">
          </figure>
        </div>
        <div class="card-content">
          <div class="title">{{post.title}}</div>
          <div class="subtitle">{{post.date | toDate}}</div>
          <div class="content">{{post.small_text}}</div>
        </div>
        <footer class="card-footer">
          <router-link :to="'/events/' + post.id" class="card-footer-item">Читать</router-link>
        </footer>
      </div>
    </div>
    <nav v-if="count > limit" class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous" title="This is the first page" :disabled="offset >= limit ? false : true">Предыдущая</a>
      <a class="pagination-next" :disabled="offset < count ? false : true">Следующая</a>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.pagination {
  justify-content: center;
}
figure {
  margin: 0;
}
.is-flex {
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  &-image {
    width: 100%;
  }
  // flex-basis: 400px;
  margin: 10px;
}
</style>

<script>
import config from "../../../admin-panel/src/config.js";
export default {
  data() {
    return {
      offset: 0,
      limit: 5,
      count: 0,
      posts: []
    };
  },
  methods: {
    nextPage() {
      this.offset += this.limit;
      this.fetchPosts();
    },
    lastPage() {
      this.offset -= this.limit;
      this.fetchPosts();
    },
    fetchPosts() {
      this.$http
        .get(
          `${config.BASEURL}/events?offset=${this.offset}&limit=${this.limit}`
        )
        .then(resp => (this.posts = resp.body))
        .catch(err => alert(`Error: ${err.error}`));
    }
  },
  created() {
    this.$http.get(`${config.BASEURL}/events/count`).then(resp => this.count = +resp.body.count).catch(err => console.log(err));
    this.fetchPosts();
  }
};
</script>