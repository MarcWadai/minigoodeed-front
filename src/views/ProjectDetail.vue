<template>
  <div>
    <h3>{{project.title}}</h3>
    <PhotoCarousel :data="getPhotos"></PhotoCarousel>
    <div class="description_container">
      <div class="des-body">
        <span>Description</span>
        <p>{{project.description}}</p>
      </div>
      
      <div class="donation">
        <span>Donation Goal: {{project.donation_goal}}</span>
        <span>Donation Current: {{project.donation_current}}</span>
      </div>
    </div>
    <br />
    <DonateButton :project_id="project._id"></DonateButton>
    <h4>Organized by</h4>
    <AssociationCard :data="asso"></AssociationCard>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoCarousel from "../components/PhotoCarousel.vue"
import AssociationCard from "../components/AssociationCard.vue"
import DonateButton from "../components/DonateButton.vue"
import { fetchAssosById } from '../api'

export default {
  name: "ProjectDetail",
  props: {
    project: Object
  },
  data: () => ({
    loading: true,
    photos: [],
    asso: null
  }),
  components: {
    PhotoCarousel,
    AssociationCard,
    DonateButton
  },
  computed: {
    getPhotos() {
      return this.project.photos;
    }
  },
  methods: {},
  beforeMount() {
    console.log("this.project", this.project.assos_id);
    fetchAssosById(this.project.assos_id).then(asso => {
      console.log('asso', asso);
      this.$data.asso = asso;
    }).catch(err => {
      console.error(err);
      this.$data.asso = {
        name: 'N/A',
        description: 'Could not find associaiton',
        logo: ''
      }
    });
  }
};
</script>

<style scoped>
.description_container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.description_container .des-body{
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  max-width: 100px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.description_container .des-body span{
  font-weight: bold;
}

.description_container .donation {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px;
}
.description_container .donation span {
  font-style: italic;
}

h4 {
  margin-top: 40px;
}
</style>
