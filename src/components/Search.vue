<template>
  <form class="pure-form">
      <input type="text" class="pure-input-rounded" />
      <button type="submit" class="pure-button button-search">Search</button>
    </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-search {
  margin-left: 15px;
}

</style>
