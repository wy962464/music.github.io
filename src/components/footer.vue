<!-- footer -->
<template>
  <div class="footer">
    <div class="simg">
      <img :src="footerimg" alt />
      <span>{{this.footersonglist[footindex].name}}</span>
    </div>
    <audio
      class="audio"
      @pause="handepause"
      @play="handeplay"
      :src="songurl"
      controls="controls"
      loop="loop"
      autoplay="autoplay"
    ></audio>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    songurl: {
      type: String,
      default: "",
    },
    stopmask: {
      type: Boolean,
      default: false,
    },
    footerimg: {
      type: String,
      default: "",
    },
    footersonglist: {
      type: Array,
      default: function () {
        return [];
      },
    },
    footindex:{
         type: Number,
         default:0
      },
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    stopmask() {
      document.querySelector("audio").pause();
    },
  },
  //方法集合
  methods: {
    handepause() {
      this.$emit("stopmusic", false);
    },
    handeplay() {
      this.$emit("stopmusic", true);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.footer {
  box-sizing: border-box;
  border-top: 1px solid red;
  width: 100%;
  height: 54px;
  background-color: #f1f3f4;
}
audio {
  width: 850px;
  height: 100%;
  outline: none;
  float: right;
}
.simg {
  float: left;
  height: 100%;
  width: 150px;
}
.simg img {
  width: 50px;
  height: 100%;
  margin-left: 10px;
}
.simg span {
  display: block;
  line-height: 53px;
  float: right;
  height: 100%;
  width: 90px;
  text-align: center;
  font-size: 12px;
  
  overflow: hidden;
}
</style>