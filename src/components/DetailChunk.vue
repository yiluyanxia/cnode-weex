<template>
  <div v-if="topic" class="detail-chunk padding-30 bg-fff">
    <div class="title">
      <text class="txt">{{topic.title}}</text>
    </div>

    <div class="infobox flex-flex">
      <div class="avatarbox">
        <image class="avatar" v-if="topic.author.avatar_url" :src="topic.author.avatar_url"></image>

      </div>

      <div class="userinfo">
        <div class="username">
          <text class="tag" :class="matchTab(topic.tab, topic.top, topic.good, true)">
           {{matchTab(topic.tab, topic.top, topic.good, false)}}
          </text>

          <text class="name">{{topic.author.loginname}}</text>
        </div>
        <div class="info">{{topic.create_at | formatDate}}创建&nbsp;•&nbsp;{{topic.visit_count}}次浏览</div>
      </div>

      <div class="collect">
       <text class="icon">&#xe63b;</text>    
       <!-- <text class="icon green">&#xe62c;</text>     -->
      </div>
    </div>

    <div class="content">
      {{topic.content}}
    </div>

  </div>
  
</template>

<script>
import * as apis from "../api/index";
import util from "../config/util";

export default {
  props:["topic"],
  data() {
    return {
      // topic:{}
    };
  },
  computed: {},
  mounted() {
    // let params = this.$route.query.id;
    // this.getList(params);
    
  },
  methods: {
     matchTab(tab, good, top, isClass) {
      return util.matchTab(tab, good, top, isClass);
    },
    // getList: function(params) {
    //   let _this = this;
    //   apis.getTopic(params, function(retdata) {
    //     _this.topic = retdata.data;     
    //   });
    // },
  }
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
  padding: 2px 4px;
  width: 70px;
  height: 38px;
  line-height: 38px;
  font-size: 24px;
  background-color: #e5e5e5;
  border-radius: 6px;
  text-align: center;
  color: #999;
}
.light {
  background-color: #80bd01;
  color: #fff;
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

