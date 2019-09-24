<template>
  <div class="association_card">
    <div class="card_body">
      <img :src="data.logo" :alt="data.title" />
      <div class="project_compteur">
      </div>
    </div>
    <div class="card_description">

    </div>
  </div>
</template>

<script>
export default {
  name: "AssociationCard",
  props: {
    data: Object
  },
  computed: {
  }
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

.project_compteur {
  display: flex;
  width: 50%;
  justify-content: space-around;
}

div.wave > span {
  display: flex;
  width: var(--pg_width_init);
  height: 10px;
  animation: animate 2.5s ease-in-out alternate infinite;
}
div.wave > span:nth-child(1) {
  background: linear-gradient(to right, #62c2f3 25%, #b2e453 100%);
}
@keyframes animate {
  to {
    width: var(--pg_width);
  }
}
</style>
