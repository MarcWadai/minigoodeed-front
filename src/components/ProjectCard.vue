<template>
  <div class="project_card">
    <h3>{{data.title}}</h3>
    <div class="card_body">
        <img :src="data.logo" :alt="data.title">
        <div class="project_compteur">
            <h4>Current: {{data.donation_current}} </h4> 
            <h4> Goal: {{data.donation_goal}}</h4>
        </div>
    </div>
    <div :style="cssVars" class='wave'>
        <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    data: Object
  },
  computed: {
      cssVars() {
          const finalWidth = (this.data.donation_current/ this.data.donation_goal) * 100;
          const initWidth = (finalWidth - 3) < 0 ? 0 : finalWidth - 3;
          return {
              '--pg_width': finalWidth + '%',
              '--pg_width_init': initWidth + '%'

          }
      }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project_card {
    margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  padding: 5px;
}
.card_body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
     border-radius: 50%;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
     width: 80%;
}

.project_compteur{
    display: flex;
    width: 50%;
    justify-content: space-around;
}

div.wave > span{
	display: flex;
	width: var(--pg_width_init);
	height: 10px;
	animation: animate 2.5s ease-in-out alternate infinite;
}
div.wave > span:nth-child(1){
	background: linear-gradient(to right, #62C2F3 25%, #B2E453 100%);
}
@keyframes animate{
	to { width: var(--pg_width); }
}

</style>
