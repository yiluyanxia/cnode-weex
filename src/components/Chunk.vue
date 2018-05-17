<template>
  <div class="chunk">
    <div class="item">
      <div class="head">
        <div class="tag">精华</div>
        <div class="count">
          <text class="replies">54</text>
          <text class="other">/3877·20小时前</text> 
        </div>
      </div>
      <div class="content" @click="linkTo">
        <div class="title">
          <text class="txt" lines="2">为社区做贡献，帮社区写自动化测试代码为社区做贡献，帮社区写自动化测试代码</text>
        </div>
        <div class="cont">
          <text class="txt" lines="4">加入cnodejs社区也快1年了，没对社区做过什么贡献，看到社区要公测，刚好自己在公司使用node.js做自动化测试。这次我要对社区贡献一套UI自动化代码，别人如果想自己搭建一套社区的话，可以直接运行这套UI自动化代码来检查UI功能码来检查UI功能码来检查UI功能
          </text>
        </div>
      </div>
      <div class="info">
        <div class="user">
          <!-- <div class="avatarbox"> -->
            <image  class="avatar" src="https://vuejs.org/images/logo.png"></image>
          <!-- </div> -->
          <text class="name">krise</text>
        </div>

        <div class="time">
          <text class="txt">最后回复于&nbsp;2018-5-11 </text>
        </div>
        
      </div>
    </div>


    <div class="item">
      <div class="head">
        <div class="tag">精华</div>
        <div class="count">54/3877·20小时前 </div>
      </div>
      <div class="content">
        <div class="title">
          <text class="txt" lines="2">为社区做贡献，帮社区写自动化测试代码为社区做贡献，帮社区写自动化测试代码</text>
        </div>
        <div class="cont">
          <text class="txt" lines="4">加入cnodejs社区也快1年了，没对社区做过什么贡献，看到社区要公测，刚好自己在公司使用node.js做自动化测试。这次我要对社区贡献一套UI自动化代码，别人如果想自己搭建一套社区的话，可以直接运行这套UI自动化代码来检查UI功能码来检查UI功能码来检查UI功能
          </text>
        </div>
      </div>
      <div class="info">
        <div class="user">
          <!-- <div class="avatarbox"> -->
            <image  class="avatar" src="https://vuejs.org/images/logo.png"></image>
          <!-- </div> -->
          <text class="name">krise</text>
        </div>

        <div class="time">
          <text class="txt">最后回复于&nbsp;2018-5-11 </text>
        </div>
        
      </div>
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
    linkTo() {
      this.$router.push("detail");
    }
  }
};
</script>

<style scoped>
.item {
  padding: 0 20px;
  border-bottom-width: 2px;
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-style: solid;
  background-color: #fff;
  margin-bottom: 20px;
}
.head {
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 30px 0 12px;
}
.tag {
  padding: 2px 4px;
  width: 70px;
  height: 38px;
  font-size: 24px;
  background-color: #80bd01;
  border-radius: 6px;
  text-align: center;
  color: #fff;
}
.count {
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
}

.count .replies {
  font-size: 28px;
  color: #9e78c0;
}
.count .other {
  font-size: 28px;
  color: #b4b4b4;
}
.content {
  border-bottom: 2px solid #f0f0f0;
}
.content .title {
  padding-bottom: 10px;
}
.content .title .txt {
  font-size: 36px;
  lines: 2;
  color: #333;
}
.content .cont {
  padding-bottom: 20px;
}
.content .cont .txt {
  font-size: 30px;
  lines: 4;
  color: #778087;
}

.info {
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 26px 0;
}

.user .avatar {
  width: 44px;
  height: 44px;
  border-radius: 100%;
}
.user {
  align-items: center;
  flex-direction: row;
}
.user .name {
  color: #778087;
}
.time .txt {
  font-size: 28px;
  color: #b4b4b4;
}
</style>

