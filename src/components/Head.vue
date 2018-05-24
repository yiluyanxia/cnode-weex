<template>
  <div class="header flex-flex">
    <div class="iconbox">
      <!-- 页面上直接打印 &#xe78a; 而不是icon font的图标 待研究-->
      <!-- <text class="icon" v-if="leftBtn" v-text="leftBtn">{{leftBtn.icon}}</text> -->
      <text class="icon" v-if="back" @click="goBack">&#xe78a;</text>
      <text class="icon" v-if="menu">&#xe653;</text>
    </div>
    <div class="txtbox">
      <text class="txt">{{title}}</text>
    </div>
    <div class="iconbox righticon">
      <text class="icon" v-if="share">&#xe624;</text>
      <text class="icon" v-if="post">&#xe60d;</text>
    </div>

  </div>
  
</template>

<script>
export default {
  // props:['title','leftBtn','rightBtn'],
  props:['title','back','menu','share','post'],

  data() {
    return {};
  },
  computed: {},
  mounted() {
   
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.icon{
  font-family: iconfont!important;  
  color: #fff;
  font-size: 42px;
  text-align: center;
}
.header {
  height: 120px;
  background-color: #444;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
}

.iconbox {
  width: 100px;
}
.header .txt {
  color: #fff;
  font-size: 42px;
}

</style>

