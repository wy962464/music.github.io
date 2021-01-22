<template>
  <div id="app">
    <music-header @getlist="handgtelist"></music-header>
    <music-main
      @getmvurl="handgetmvurl"
      :songlist="songlist"
      @geturl="handsongurl"
      @getcomment="handgetcomment"
      :backcomment="getcomment"
      :musicstop="getstopmusic"
      @getmimgurl="handgetmimgurl"
      :backmimgurl="mimgurl"
      @getlist="handgtelist"
      @num="handindex"
    ></music-main>
    <music-footer :songurl="getsongurl" @stopmusic="handstopmusic" :stopmask="handmaskcancel" :footerimg="mimgurl" :footersonglist="songlist" :footindex="index"></music-footer>
    <div class="mask" :class="{none:handmaskcancel}">
      <div class="mask-video">
        <video ref="video" :src="getmv" controls autoplay loop></video>
      </div>
      <div class="mask-cancel" @click="handcancel">x</div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  data: function () {
    return {
      songlist: [],
      getsongurl: "",
      getmv: "",
      getcomment: [],
      handmaskcancel: true,
      getstopmusic:false,
      mimgurl:"",
      index:0,
    };
  },
  components: {
    "music-header": Header,
    "music-main": Main,
    "music-footer": Footer,
  },
  watch:{
  },
  methods: {
    handgtelist(songlist) {
      this.songlist = songlist;
    },
    handsongurl(songurl) {
      this.getsongurl = songurl;
    },
    handgetcomment(getcomment) {
      this.getcomment = getcomment;
    },
    handgetmvurl(songmvid) {
      console.log(songmvid);
      this.getmv = songmvid;
      this.handmaskcancel = false;
      console.log(this.songurl);
    },
    handcancel() {
      this.handmaskcancel = true;
      //视频停止的触发事件 pause
      this.$refs.video.pause();
    },
   handstopmusic(stop){
       this.getstopmusic=stop
   },
   handgetmimgurl(mimgurl){
      this.mimgurl=mimgurl
   },
   handindex(index){
   this.index=index
   console.log(index);
   }
  },
};
</script>

<style>
body{
  width: 100%;
  height: 949px;
  background: #ccc;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  box-sizing: border-box;
  width: 1002px;
  height: 597px;
  margin: 0 auto;
  margin-top: 20px;
  background: url(/static/imgs/home.jpg)  no-repeat center   ;
  background-size: 100% 100%;
  border: 1px solid #ccc;
}
.mask {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
}
.mask-video {
  width: 550px;
  height: 400px;
  margin: 100px auto;
}
video {
  width: 100%;
  height: 100%;
  outline: none;
}
.mask-cancel {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
}
.none {
  display: none;
}
</style>
