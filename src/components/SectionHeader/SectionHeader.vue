<template>
    <header>
        <h1 class="section-header">
            {{message}}
        </h1>
    </header>
</template>

<script>
export default {
  props: [
      'message'
  ]
}
</script>


<style lang="scss" scoped>
.section-header {
    margin-top: 4rem;
    font-size: 2.5rem;
    font-weight: 200;
    text-align: center;
}
</style>
