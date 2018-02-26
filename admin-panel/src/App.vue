<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      cookie: document.cookie
    };
  }
};
</script>

<style lang="scss">

</style>
