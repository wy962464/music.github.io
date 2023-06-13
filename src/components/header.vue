<!-- music-header -->
<template>
  <div class="header">
    <div class="header-left"><a href="#" title="在线音乐"></a>在线音乐</div>
    <div class="header-right">
      <input
        type="text"
        v-model="headervalue"
        @keydown.enter="handenter"
        placeholder="热门/民谣"
      />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      headervalue: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handenter: async function() {
      if (!this.headervalue) {
        return false;
      }
      let res = await this.$http.get("search", {
        params: {
          keywords: this.headervalue,
        },
      });
      this.$emit("getlist", res.data.result.songs);
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
<style scoped>
.header {
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 60px;
  font-weight: 700;
  border: 1px solid #a71e1e;
  border-bottom: none;
  box-sizing: border-box;
  background: #a71e1e;
}
.header-left {
  width: 172px;
  height: 100%;
  font-size: 20px;
  color: #ffff;
}
.header-left a {
  position: absolute;
  display: inline-block;
  width: 33px;
  height: 52px;
  background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?345c68cea0333beaa6447c10e846d3ad")
    no-repeat;
  left: 9px;
  top: -7px;
}
.header-right {
  height: 100%;
  width: 220px;
}
.header-right input {
  height: 27px;
  width: 207px;
  border: none;
  border-radius: 13px;
  outline: none;
  text-indent: 14px;
  background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?345c68cea0333beaa6447c10e846d3ad")
    173px -99px no-repeat white;
}
</style>
