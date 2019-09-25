<template>
  <div class="home">
    <div class="project_container">
      <div class="project_item" v-for="(asso, index) in assos" :key="`assos_${index}`">
        <AssociationCard :data="asso"></AssociationCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AssociationCard from "@/components/AssociationCard.vue";

export default {
  name: "Association",
  data: () => ({
  }),
  components: {
    AssociationCard,
  },
  computed: {
    assos() {
      return this.$store.state.assos;
    }
  },
  methods: {
    fetchAssos(store) {
      this.loading = true;
      store.dispatch({ type: "FETCH_ASSOCIATIONS" }).then(() => {
        console.log(this.assos)
        this.loading = false;
      });
    },
  },
  beforeMount() {
    this.fetchAssos(this.$store);
  }
};
</script>

<style scoped>
.project_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.project_item {
  min-width: 300px;
  margin: 15px;
}

@media only screen and (max-width: 600px) {
  .project_item {
    min-width: 80%;
  }
}
</style>
