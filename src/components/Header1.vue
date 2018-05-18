<template>
  <div class="header flex-flex">
    <div class="iconbox" @click="goBack">
      <text class="icon menu">&#xe78a;</text>
    </div>

    <div class="txtbox">
      <text class="txt">话题</text>
    </div>
    <div class="iconbox righticon">
      <text class="icon menu">&#xe624;</text>
    </div>

  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.menu {
  font-family: iconfont;
  color: #fff;
  font-size: 42px;
}
.header {
  width: 100%;
  height: 120px;
  background-color: #444;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
}

.iconbox {
  padding: 0 30px;
}

.header .txtbox {
  padding-left: 20px;
}
.header .txt {
  color: #fff;
  font-size: 42px;
}
.righticon {
}
</style>

