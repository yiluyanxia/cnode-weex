<template>
  <div class="popbg" v-if="isShowVal" @click="hideSide">
    <div class="side bg-fff" :class="{'show': isShowVal}">
      <div class="head padding-30">
        <div class="tool flex-flex">
          <text class="icon">&#xe60d;</text>
          <text class="logout">注销</text>
        </div>
        <div class="avatarbox padding-30">
          <image class="avatar" src="https://vuejs.org/images/logo.png"></image>
        </div>
        <div class="info padding-top-20">
          <text class="name">yiluyanxia</text>
          <text class="score">积分：10</text>
        </div>
      </div>
      <div class="list padding-top-16">

        <div class="item flex-flex" :class="[isActive('all')]"  @click="linkTo('all')">
          <text class="icon">&#xe639;</text>
          <text class="txt">全部</text>
        </div>
        <div class="item flex-flex" :class="[isActive('good')]"  @click="linkTo('good')">
          <text class="icon">&#xe60c;</text>
          <text class="txt">精华</text>
        </div>

        <div class="item flex-flex" :class="[isActive('ask')]" @click="linkTo('ask')">
          <text class="icon">&#xe639;</text>
          <text class="txt">问答</text>
        </div>

        <div class="item flex-flex border-bottom" :class="[isActive('job')]" @click="linkTo('job')">
          <text class="icon">&#xe785;</text>
          <text class="txt">招聘</text>
        </div>

        <div class="item flex-flex">
          <text class="icon">&#xe6f5;</text>
          <text class="txt">消息</text>
        </div>

        <div class="item flex-flex">
          <text class="icon">&#xe6e8;</text>
          <text class="txt">设置</text>
        </div>

        <div class="item flex-flex">
          <text class="icon">&#xe61e;</text>
          <text class="txt">关于</text>
        </div>

      </div>
    </div>
  </div>


</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isShow: false,
      activeKey: "all"
    };
  },
  computed: {
    ...mapGetters(["side"]),
    isShowVal() {
      return this.side.isShow;
    }
  },
  mounted() {},
  methods: {
    hideSide() {
      this.$store.dispatch("hideSide");
    },
    isActive(aKey) {
      return this.activeKey === aKey ? "active" : "";
      
    },
    linkTo(tab) {
      if (this.activeKey === tab) return;
      this.activeKey = tab;
      this.$emit("switchTab", tab);
      this.$store.dispatch("hideSide");
      
    }
  }
};
</script>

<style scoped>
.popbg {
  background-color: rgba(0, 0, 0, 0.5);
  width: 750px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.side {
  width: 618px;
  overflow: hidden;
  height: 100%;
  position: fixed;
  left: -618px;
  top: 0;
  bottom: 0;
  transition: all 1s;
}

.side.show {
  left: 0;
}

.head {
  background: linear-gradient(to right, #80bd01, #6ba44e);
}

.tool {
  justify-content: space-between;
}

.tool .icon {
  color: #fff;
}

.logout {
  color: #fff;
  /* padding: 0 30px; */
}

.avatarbox .avatar {
  margin: 0 auto;
}

.info .name,
.info .score {
  text-align: center;
}

.info .score {
  padding-top: 10px;
}

.side .avatar {
  width: 100px;
  height: 100px;
}

.info .name {
  color: #fff;
  font-size: 36px;
}

.score {
  color: #fff;
  font-size: 30px;
}

.list .item {
  height: 104px;
  justify-content: flex-start;
  padding: 0 30px;
}

.list .item .icon {
  font-size: 40px;
}

.list .item .txt {
  padding-left: 50px;
  font-size: 32px;
  color: #333;
}

.list .item.active {
  background-color: #eee;
}

.list .item.active .icon,
.list .item.active .txt {
  color: #80bd01;
}
</style>