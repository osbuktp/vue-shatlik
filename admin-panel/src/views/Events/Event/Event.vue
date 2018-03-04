<template>
    <wrap-menu>
        <section class="box">
            <form>
                <div class="field">
                    <label class="label">Название</label>
                    <div class="control">
                        <input v-model="post.title" class="input" type="text" placeholder="Text input">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Главное изображение</label>
                    <div class="control">
                        <input v-model="post.main_image" class="input" type="text" placeholder="Text input">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Интро</label>
                    <div class="control">
                        <textarea v-model="post.small_text" class="textarea"></textarea>
                    </div>
                </div>

                <details class="post-block box details" v-for="(block, id) in post.blocks" :key="id" open>
                    <summary class="summary">
                        Блок №{{id+1}}
                    </summary>
                    <div class="details-content">
                        <div class="field">
                            <label class="label">
                                Текст
                            </label>
                            <div class="control">
                                <textarea v-model="block.text" class="textarea"></textarea>
                            </div>
                        </div>
                        <div class="field has-addons" v-for="(blockimage, imageid) in block.images" :key="imageid">
                            <div class="control">
                                <input v-model="blockimage.url" class="input" type="text" :placeholder="'Изображение №' + (imageid + 1)">
                            </div>
                            <div class="control">
                                <a @click="block.images.splice(imageid, 1)" class="button is-danger">
                                    X
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <a @click="block.images.push({url:''})" class="button is-primary">Добавить изображение</a>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <a @click="post.blocks.splice(id, 1)" class="button is-danger">
                                    Удалить блок
                                </a>
                            </div>
                        </div>
                    </div>
                </details>

                <div class="field">
                    <div class="control">
                        <a @click="post.blocks.push({text:'',images:[]})" class="button is-primary">Добавить блок</a>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <a @click="postEvent" class="button is-info">Сохранить</a>
                    </div>
                    <div class="control">
                        <router-link to="/events" class="button is-text">
                            Отмена
                        </router-link>
                    </div>
                </div>
            </form>
        </section>
    </wrap-menu>
</template>

<script>
import WrapMenu from "../../../components/WrapMenu";
export default {
  components: {
    WrapMenu
  },
  data() {
    return {
      post: {
        title: "",
        main_image: "",
        small_text: "",
        blocks: []
      }
    };
  },
  methods: {
    postEvent() {
      let newDate = new Date();
      let newPost = {
        title: this.post.title,
        main_image: this.post.main_image,
        small_text: this.post.small_text,
        date: newDate.toISOString(),
        images: [].concat(
          ...this.post.blocks.map((block, index) => {
            return block.images
              .map((image, imgIndex) => {
                return {
                  level: index,
                  image: image.url
                };
              })
              .filter(image => {
                return block.text && image.image ? true : false;
              });
          })
        ),
        blocks: this.post.blocks
          .map((block, index) => {
            return {
              level: index,
              text: block.text
            };
          })
          .filter(block => {
            return block.text ? true : false;
          })
      };
      console.dir(newPost);
      this.$http.post(
        "https://shatlik-staging.herokuapp.com/events",
        JSON.stringify(newPost)
      );
    }
    // addBlock() {
    //   this.post.blocks.push({
    //     text: "",
    //     images: []
    //   });
    // },
    // addImage(block) {
    //   block.images.push({url:''});
    // }
  },
  props: ["isNewEvent"]
};
</script>

<style lang="scss" scoped>
.button {
  height: auto;
}
.textarea,
.input {
  box-sizing: border-box;
}
.post-block {
  margin-bottom: 0.75rem;
}
.details {
  padding: 0;
  &-content {
    padding: 1.25rem;
  }
}
.summary {
  padding: 1.25rem;
  cursor: pointer;
}
.summary:focus {
  outline: none;
}
.summary + * {
  margin-top: 10px;
}
</style>


