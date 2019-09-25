<template>
  <div class="donation_container">
    <div class="brand_description">
      <img src="https://picsum.photos/300/200" alt />
      <h3>Brand name</h3>
      <div>This is the brand zefh sldbvljzbelvzlrb vsjlrb bslrjb description yolilol</div>
      <div class="donation_confirmation">
        <button class="pure-button pure-button-primary">Confirm donation</button>
      </div>
    </div>
    <div class="brand_video">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @statechanged="playerStateChanged($event)"
         @playing="onPlayerPlaying($event)"
        @ready="playerReadied"
      >></video-player>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "video.js/dist/video-js.css";
// require('videojs-youtube');
// require('videojs-vimeo');
import { videoPlayer } from "vue-video-player";

export default {
  name: "donation",
  props: {
    project_id: String
  },
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        autoplay: true,
        muted: false,
        language: "en",
        controls: true,
        fluid: true,
        // crossOrigin: 'Anonymous',
        width: "700px",
        height: "450px",
        sources: [
          {
            type: "video/mp4",
            src: "https://webm.eyy.co/cyka/paprika%20parade.mp4"
            // src:"https://webm.eyy.co/cyka/DEJAVUUU.webm"
            // src: "https://webm.eyy.co/cyka/what's%20in%20the%20box.webm"
            // src: "https://webm.eyy.co/cyka/srach.webm"
            // src: "https://webm.eyy.co/cyka/cat%20exposed%20to%20nerve%20gas.webm"
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"    
          }
        ],
        poster: ""
      }
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event
    onPlayerPlaying(player) {
        console.log('playiiiing');
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
    }
  }
};
</script>

<style scoped>
.donation_container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.brand_description {
  flex: 1;
  margin: 15px;
}
.brand_description img {
  border-radius: 50%;
  min-width: 50px;
  max-width: 100%;
}

.brand_video {
  flex: 2;
  max-width: 70%;
  min-width: 300px;
  margin: 15px;
}

.donation_confirmation {
    margin-top: 10px;
}
</style>
