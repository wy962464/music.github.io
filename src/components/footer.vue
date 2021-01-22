<!-- footer -->
<template>
  <div class="footer">
    <audio class="audio" @pause="handepause"  @play="handeplay" :src="songurl" controls="controls" loop="loop" autoplay="autoplay"></audio>
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
    stopmask:{
      type: Boolean,
      default:false,
    }
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
    
  },
  //方法集合
  methods: {
    handepause(){
     this.$emit("stopmusic",false)
    },
    handeplay(){
         this.$emit("stopmusic",true)
    }
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
.footer{
   border-top: 1px solid red;
   width: 100%;
   height: 60px;
}
audio{
    width: 100%;
    height: 100%;
    outline: none;
}
</style>