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
    <div class="popbg" v-if="isShowVal" @click="hideSide"></div>
    <side :isShow="isShowVal"></side>
  </div>




</template>

<script>
  import side from "./Side.vue";

  export default {
    components: {
      side
    },
    data() {
      return {
        isShowVal: false
      };
    },
    computed: {},
    mounted() {},
    methods: {
      showSide: function () {
        this.isShowVal = !this.isShowVal;
      },
      hideSide: function(){
        this.isShowVal = !this.isShowVal;
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

  .popbg {
  background-color: rgba(0, 0, 0, 0.5);
  width: 750px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>