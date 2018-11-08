<template>
  <div>
    <video-player  class="vjs-custom-skin"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname"

                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"

                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
  import 'videojs-flash'
  import 'videojs-contrib-hls'
  import './custom.css'
  export default {
    name: 'videodetail',
    data () {
      return {
        playerOptions: {}
      }
    },
    methods: {
      // listen event
      onPlayerPlay (player) {
        // console.log('player play!', player)
      },
      onPlayerPause (player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged (playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied (player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    },
    mounted () {
      let playurl = this.$route.query.url
      console.log(playurl)
      this.playerOptions = {
        height: '480',
        sources: [{
          withCredentials: false,
          type: 'rtmp/flv',
          src: 'rtmp://1011.lssplay.aodianyun.com/demo/game'
        }, {
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: playurl
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: {hls: { withCredentials: false }},
        html5: {hls: { withCredentials: false }},
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
