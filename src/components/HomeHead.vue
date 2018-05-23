<template>
  <div class="header-wrap">
    <div class="header">
      <div class="iconbox" @click="showSide">
        <text class="icon menu">&#xe653;</text>
      </div>
      <div class="txtbox">
        <text class="txt">Cnode</text>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const storage = weex.requireModule("storage");

export default {
  data() {
    return {
      isShowVal: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showSide() {
      this.$store.dispatch("showSide");
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
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
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
</style>