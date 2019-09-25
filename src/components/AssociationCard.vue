<template>
  <div class="association_card">
    <div class="card_body">
      <img :src="data.logo" :alt="data.name" />
    </div>
    <div class="card_description">
      <h3>{{data.name}}</h3>
      <h4>{{data.description}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssociationCard",
  props: {
    data: Object
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.association_card {
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  padding: 5px;
  display: flex;
  width:100%;
  justify-content: center;
}
.card_body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 80%;
}
h4 {
  color: gray
}


</style>
