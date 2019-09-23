<template>
  <div class="home">
    <Search />
    <div class="project_container">
      <div class="project_item" v-for="(project, index) in projects" :key="`pj_${index}`">
        <ProjectCard :data="project"></ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "home",
  data: () => ({
    loading: true
  }),
  components: {
    Search,
    ProjectCard
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {
    fetchProjects(store) {
      this.loading = true;
      store.dispatch({ type: "FETCH_PROJECTS" }).then(() => {
        this.loading = false;
      });
    }
  },
  beforeMount() {
    console.log("this.$store", this.$store);
    this.fetchProjects(this.$store);
  }
};
</script>

<style scoped>
.project_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project_item {
  min-width: 300px;
}

@media only screen and (max-width: 600px) {
  .project_item {
    min-width: 80%;
  }
}
</style>
