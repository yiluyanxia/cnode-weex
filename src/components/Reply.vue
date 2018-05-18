<template>
  <list>
    <cell class="reply" v-for="(reply,index) in replies" :key="reply.id">
      <div class=" flex-flex">
        <div class="avatarbox">
          <image class="avatar" :src="reply.author.avatar_url"></image>
        </div>
        <div class="userinfo">
          <div class="name">{{reply.author.loginname}}</div>
          <div class="info flex-1">
            <text class="txt color-green">{{index}}楼</text>&nbsp;•&nbsp;{{reply.create_at | formatDate}}</div>
        </div>
        <div class="handle flex-flex">
          <div class="likebox flex-flex">
            <text class="like icon">&#xe60c;</text>
            <text class="num">{{reply.ups.length}}</text>
          </div>
          <div class="replyicon">
            <text class="rep icon">&#xe609;</text>
          </div>
        </div>
      </div>
      <div class="content padding-top-20">
        {{reply.content}}
      </div>
    </cell>
  </list>
</template>

<script>
export default {
  props:["replies"],  
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

.content {
  font-size: 32px;
  color: #333;
  line-height: 1.8;
}
</style>