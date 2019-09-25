<template>
  <div class="project_card">
    <router-link :to="{name: 'donation', params: {project_id}}">
      <button class="pure-button pure-button-primary">DONATE</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DonateButton",
  props: {
    project_id: String
  },
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  font-weight: bold;
  text-decoration: unset;
}
button {
  width: 50%;
}
</style>
