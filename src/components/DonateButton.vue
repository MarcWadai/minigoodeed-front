<template>
  <div class="project_card">
    <button class="pure-button pure-button-primary">
        <router-link :to="{name: 'donation', params: {project_id}}">DONATE</router-link>
        
        </button>
  </div>
</template>

<script>
export default {
  name: "DonateButton",
  props: {
    project_id: String
  },
  computed: {},
  methods: {
  }
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
