<template>
  <div class="detail-chunk padding-30 bg-fff">
    <div class="title">
      <text class="txt">为社区做贡献，帮社区写自动化测试代码为社区做贡献，帮社区写自动化测试代测试代码</text>
    </div>

    <div class="infobox flex-flex">
      <div class="avatarbox">
        <image  class="avatar" src="https://vuejs.org/images/logo.png"></image>
      </div>

      <div class="userinfo">
        <div class="username">
          <text class="tag">问答</text>
          <text class="name">用户名</text>
        </div>
        <div class="info">55分钟前创建&nbsp;•&nbsp;55次浏览</div>
      </div>

      <div class="collect">
       <text class="icon">&#xe63b;</text>    
       <!-- <text class="icon green">&#xe62c;</text>     -->
      </div>
    </div>

    <div class="content">加入cnodejs社区也快1年了，没对社区做过什么贡献，看到社区要公测，刚好自己在公司使用node.js做自动化测试。这次我要对社区贡献一套UI自动化代码，别人如果想自己搭建一套社区的话，可以直接运行这套UI自动化代码来检查UI功能。平时工作时间比较忙，所以本周日我计划要做如下的事情，为了让大家都能看懂我的代码，我会使用行为驱动测试的方式来写代码，完成之后的代码大致如下
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
  methods: {}
};
</script>

<style scoped>
.detail-chunk {
  border-bottom: 2px solid #dbdbdb;
}

.title .txt {
  font-size: 38px;
  font-weight: 600;
}

.infobox {
  padding: 30px 0;
}
.userinfo {
  width: 550px;
  padding-left: 30px;
}
.username {
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 10px;
}
.tag {
  background-color: #eee;
  font-size: 24px;
  border-radius: 6px;
  padding: 3px 10px;
  color: #838383;
}
.name {
  color: #333;
  padding: 0 16px;
  font-size: 28px;
}
.info {
  font-size: 28px;
  color: #778087;
}

.collect .icon {
  font-size: 38px;
  color: #778087;
}
.collect .green{
  font-size: 34px;  
  color: #80bd01;
}
.content{
  font-size: 32px;
  color: #333;
  line-height: 1.8;
}
</style>

