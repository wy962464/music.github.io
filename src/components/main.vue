<!-- main -->
<template>
  <div class="main">
    <div class="main-left">
      <div
        class="main-main"
        v-for="(item,index) in songlist"
        :key="item.id"
        @click="handclickcomment(item.id)"
      >
        <div class="main-main-left" @click="handclicksong(item.id,index)"></div>
        <div class="main-main-center">{{item.name}}</div>
        <div
          :class="['main-main-right',{hidden:item.mvid===0?true:false}]"
          @click="handsongmv(item.mvid)"
        ></div>
      </div>
    </div>
    <div class="main-center">
      <div :class="['discimg',{discing:palymusic}]" ></div>
      <img :class="['playerimg',{playing:palymusic}]" src="http://assets.stickpng.com/thumbs/58e3853c204d556bbd97b151.png" alt />
      <img :src="backmimgurl" alt="" :class="['backmimgurl',{backmimgurlrun:palymusic}]">
    </div>
    <div class="main-right">
      <div class="message">热门留言</div>
      <div class="comment" v-for="items in backcomment" :key="items.id">
        <div class="comment-headportrait">
          <img  :src="items.user.avatarUrl" alt />
        </div>
        <div class="comment-nickname">{{items.user.nickname}}</div>
        <div class="comment-text">{{items.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    songlist: {
      type: Array,
      default: function () {
        return [];
      },
    },
    songmv: {
      type: String,
      default: "",
    },
    backcomment: {
      type: Array,
      default: function () {
        return [];
      },
    },
    musicstop: {
      type: Boolean,
      default: false,
    },
    backmimgurl:{
        type:String,
        default: "",
    },
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      palymusic:false,
      //palyingmusic:this.palymusic
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
   musicstop(newvalue){
     this.palymusic=newvalue
   },
  },
  //方法集合
  methods: {
    handclickcomment(id) {
      this.$http
        .get("comment/hot?type=0", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          let getcomment = res.data.hotComments;
          this.$emit("getcomment", getcomment);
        });
    },
    handclicksong(id,index) {
      //设置状态位
      this.palymusic = true;
      this.$http
        .get("song/url", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          console.log(res);
          let songurl = res.data.data[0].url;
          this.$emit("geturl", songurl);
        });
      this.$emit("num",index)
     this.$http.get("song/detail",{
            params:{
              ids:id
            }
     }).then((res)=>{
          console.log(res);
          let mimgurl= res.data.songs[0].al.picUrl
          console.log(mimgurl);
          this.$emit("getmimgurl",mimgurl)
     })
    },
    handsongmv(mvid) {
      this.palymusic = false;
      console.log(mvid);
      this.$http
        .get("mv/url", {
          params: {
            id: mvid,
          },
        })
        .then((res) => {
          let songmvid = res.data.data.url;
          this.$emit("getmvurl", songmvid);
          console.log(songmvid);
        });
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  this.$http.get("https://apimusic.linweiqin.com/search",{
          params:{ 
            keywords:"热门"
          }
   }).then((res)=>{
          this.$emit("getlist",res.data.result.songs);
   });
         this.$http.get("song/detail",{
            params:{
              ids:1357999894
            }
     }).then((res)=>{
          console.log(res);
          let mimgurl= res.data.songs[0].al.picUrl
          console.log(mimgurl);
          this.$emit("getmimgurl",mimgurl)
     });
      this.$http
        .get("comment/hot?type=0", {
          params: {
            id: 1357999894,
          },
        })
        .then((res) => {
          let getcomment = res.data.hotComments;
          this.$emit("getcomment", getcomment);
        });
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style   scoped>
.main {
  width: 100%;
  height: 480px;
}
.main-left {
  width: 250px;
  height: 100%;
  overflow-y: scroll;
  float: left;
}
.main-main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: black;
  cursor: pointer;
  align-items: center;
  line-height: 50px;
}
.main-main:nth-child(odd) {
  background: #cccc;
}
.main-main:nth-child(even) {
  background: #ccc;
}
.main-main-left {
  width: 50px;
  height: 100%;
  width: 18px;
  height: 18px;
  background: url("https://s2.music.126.net/style/web2/img/table.png?7a37365cb08ee28de7adc74ac76bdb9c") -20px -128px;
}
.main-center {
  position: relative;
}
.playerimg {
  left: 200px;
  position: absolute;
  z-index: 8;
  transform: rotate(-47deg);
  transform-origin: 66px 12px;
  transition: all 2s;
  width: 92px;
  height: 128px;
}
.playing {
  transform: rotate(-30deg) !important;
}
.discimg {
  width: 204px;
  height: 202px;
  position: absolute;
  left: 127px;
  top: 100px;
  z-index: 2;
  background: url("https://s2.music.126.net/style/web2/img/coverall.png?415ce7b46861e87b4ec362faf44f6da4") no-repeat ;
  background-position: -140px -580px;
}
.discing {
  animation-name: running;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes running {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.backmimgurl{
  position: absolute;
  width: 150px;
  height: 150px;
  top: 130px;
  left: 153px;
  border-radius: 50%;
}
.backmimgurlrun{
  animation-name: left;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes  left{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.main-main-right {
  width: 50px;
  height: 100%;
  width: 26px;
  height: 17px;
  background: url("https://s2.music.126.net/style/web2/img/table.png?7a37365cb08ee28de7adc74ac76bdb9c") no-repeat;
  background-position: 0 -151px;
}
.main-main-center {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
  height: 100%;
  font-size: 13px;
}
.hidden {
  visibility: hidden;
}
.main-center {
  width: 480px;
  height: 100%;
  float: left;
}
video {
  width: 100%;
  height: 100%;
  outline: none;
  background-color: rgba(225, 225, 225, 0.5);
}
.main-right {
  height: 100%;
  width: 270px;
  float: left;
  overflow-y: scroll;
}
.message {
  color: #fff;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
}
.comment {
  width: 100%;
  margin-top: 10px;
  min-height: 50px;
  float: left;
}
.comment-headportrait {
  width: 50px;
  height: 50px;
  float: left;
  color: black;
}
.comment-headportrait img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment-nickname {
  width: 200px;
  height: 50px;
  float: right;
  text-indent: 11px;
  font-size: 20px;
  overflow: hidden;
  line-height: 50px;
  font-weight: 800;
}
.comment-text {
  width: 100%;
  min-height: 10px;
  float: left;
  text-indent: 27px;
  font-size: 17px;
  margin-top: 10px;
  font-weight: 500;
  font-family:Arial,Helvetica,sans-serif
}
</style>