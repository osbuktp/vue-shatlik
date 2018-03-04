<template>
    <wrap-menu>
        <section class="box">
            <nav class="panel">
                <p class="panel-heading">
                    Список мероприятий
                </p>
                <!-- <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="search">
                        <span class="icon is-small is-left">
                            <i class="fas fa-search"></i>
                        </span>
                    </p>
                </div> -->
                <div class="panel-block">
                    <router-link to="/events/new" class="button is-link is-outlined is-fullwidth">
                        Добавить +
                    </router-link>
                </div>
                <a class="panel-block is-active">
                    Тестовое мероприятие
                </a>
            </nav>
        </section>
    </wrap-menu>
</template>

<script>
import WrapMenu from "../../components/WrapMenu";
export default {
  components: {
    WrapMenu
  }
};
</script>

