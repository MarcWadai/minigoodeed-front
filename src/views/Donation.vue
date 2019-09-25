<template>
  <div class="donation_container">
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>

    <div class="brand_description">
      <img :src="ad.logo" alt />
      <h3>{{ad.title}}</h3>
      <div>{{ad.description}}</div>
      <div class="donation_confirmation">
        <vue-countdown-timer
          @start_callback="startCallBack('event started')"
          @end_callback="endCallBack('event ended')"
          :start-time="timerStartTime"
          :end-time="timerStartEnd"
          :interval="1000"
          :end-label="'Can confirm in'"
          label-position="begin"
          :end-text="'Click confirm !'"
          :day-txt="null"
          :hour-txt="null"
          :minutes-txt="null"
          :seconds-txt="'seconds'"
        ></vue-countdown-timer>
        <button
          @click="confirmationDonation"
          :disabled="!countFinish"
          class="pure-button pure-button-primary"
        >Confirm donation</button>
      </div>
    </div>
    <div class="brand_video">
      <video-player
        @click="redirect"
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
import { fetchAdCampaign, postDonation } from "../api";

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
      isLoading: false,
      countFinish: false,
      ad: null,
      playerOptions: {
        // videojs options
        autoplay: true,
        muted: false,
        language: "en",
        controls: false,
        fluid: true,
        // crossOrigin: 'Anonymous',
        width: "700px",
        height: "450px",
        // sources: [
        //   {
        //     type: "video/mp4",
        //     src:"https://webm.eyy.co/cyka/DEJAVUUU.webm"
        //     // src: "https://webm.eyy.co/cyka/what's%20in%20the%20box.webm"
        //     // src: "https://webm.eyy.co/cyka/srach.webm"
        //     // src: "https://webm.eyy.co/cyka/cat%20exposed%20to%20nerve%20gas.webm"
        //     // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        //   }
        // ],
        poster: ""
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    timerStartTime() {
      const date = new Date();
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    timerStartEnd() {
      return Date.now() + 20000;
    }
  },
  methods: {
    redirect() {
      window.open(ad.redirect_uri);
    },
    // listen event
    onPlayerPlay(player) {},
    onPlayerPause(player) {
    },
    // ...player event
    onPlayerPlaying(player) {
      this.$data.timerStartTime = Date.now();
      this.$data.timerStartEnd = this.$data.timerStartTime + 20000;
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {},
    // player is ready
    playerReadied(player) {
      player.src([
        {
          type: "video/mp4",
          src: this.$data.ad.video_uri
        }
      ]);
      player.play()
    },
    startCallBack: function(x) {
    },
    endCallBack: function(x) {
      const current = new Date();
      if (current.getTime() > this.timerStartEnd) {
        this.countFinish = true;
      }
    },
    confirmationDonation: async function() {
        try{
            this.$data.isLoading = true;
            const campaignId = this.$data.ad._id;
            const projectId = this.$props.project_id;
            const res = await postDonation({ projectId, campaignId });
            this.$data.isLoading = false;
            this.$router.push("home");
        }catch(err) {
          console.error(err);
          this.$data.isLoading = false;
        };
    }
  },
  beforeMount() {
    fetchAdCampaign()
      .then(ad => {
        this.$data.ad = ad;
      })
      .catch(err => console.error(err));
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
  margin-top: 30px;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

.loader-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
