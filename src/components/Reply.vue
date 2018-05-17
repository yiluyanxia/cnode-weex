<template>
  <div class="reply">
    <div class=" flex-flex">
      <div class="avatarbox">
        <image class="avatar" src="https://vuejs.org/images/logo.png"></image>
      </div>
      <div class="userinfo">
        <div class="name">用户名</div>
        <div class="info flex-1">
          <text class="txt color-green">3楼</text>&nbsp;•&nbsp;2 个月前</div>
      </div>
      <div class="handle flex-flex">
        <div class="likebox flex-flex">
          <text class="like icon">&#xe60c;</text>
          <text class="num">0</text>
        </div>
        <div class="replyicon">
          <text class="rep icon">&#xe609;</text>
        </div>
      </div>
    </div>
    <div class="content padding-top-20">
      可以直接运行这套UI自动化代码来检查UI功能。平时工作时间比较忙
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
.reply {
  background-color: #fff;
  border-bottom: 2px solid #dbdbdb;
  padding: 30px;
}

.userinfo {
  width: 400px;
}

.num {
  padding: 0 14px;
  color: #778087;
  font-size: 30px;
}

.replyicon {
  padding-left: 16px;
}

.name {
  color: #333;
  font-size: 28px;
}

.info {
  font-size: 28px;
  color: #778087;
}

.info .txt {
  font-size: 28px;
}
.content{
  font-size: 32px;
  color: #333;
  line-height: 1.8;
}
</style>