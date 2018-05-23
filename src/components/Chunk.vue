<template>
  <list class="chunk">
    <cell v-if="topics" class="item" v-for="topic in topics">
      <div class="head">

        <div class="tag" :class="matchTab(topic.tab, topic.top, topic.good, true)">{{matchTab(topic.tab, topic.top, topic.good, false)}}</div>

        <!-- <div class="tag">{{topic.tab}}</div> -->
        <div class="count">
          <text class="replies">{{topic.reply_count}}</text>
          <text class="other">/{{topic.visit_count}}&nbsp;·&nbsp; {{topic.last_reply_at | formatDate}}</text>
        </div>
      </div>
      <div class="content" @click="linkTo(topic.id)">
        <div class="title">
          <text class="txt" lines="2">{{topic.title}}</text>
        </div>
        <div class="cont">
          <text class="txt" lines="4">{{topic.content}}
          </text>
        </div>
      </div>
      <div class="info">
        <div class="user">
          <image class="avatar" :src="topic.author.avatar_url"></image>
          <text class="name">{{topic.author.loginname}}</text>
        </div>

        <div class="time">
          <text class="txt">发布于&nbsp;{{topic.create_at | formatDate}} </text>
        </div>

      </div>
    </cell>
  </list>

</template>

<script>
import * as apis from "../api/index";
import util from "../config/util";

export default {
  props:["topics"],
  data() {
    return {
      getResult: "loading...",
      // paging: {
      //   page: 1,
      //   limit: 10,
      //   tab: "all",
      //   mdrender: false
      // },
      // topicsList: []
    };
  },
  computed: {},
  mounted() {
    // this.getTopices();
    // this.getList();
  },
  methods: {
    linkTo(tId) {
       this.$router.push({
        path: "/detail",
        query: { id: tId }
      });
    },

    matchTab(tab, good, top, isClass) {
      return util.matchTab(tab, good, top, isClass);
    },
    // getList: function(params) {
    //   let _this = this;
    //   var params = this.paging;
    //   apis.getTopics(params, function(retdata) {
    //     _this.topicsList = retdata.data;
    //   });
    // },


    getTopices() {
      let _this = this;
      let topicsUrl =
        "https://cnodejs.org/api/v1/topics?page=1&limit=40&tab=all&mdrender=true";

      stream.fetch(
        {
          method: "GET",
          url: topicsUrl,
          type: "json"
        },
        function(ret) {
          if (!ret.ok) {
            _this.getResult = "request failed";
          } else {
            console.log("get:" + ret);
            _this.getResult = JSON.stringify(ret.data);
          }
        },
        function(response) {
          console.log("get in progress:" + response.length);
          _this.getResult = "bytes received:" + response.length;
        }
      );
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
  background-color: #e5e5e5;
  border-radius: 6px;
  text-align: center;
  color: #999;
}
.light {
  background-color: #80bd01;
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
  padding: 0 16px;
}

.time .txt {
  font-size: 28px;
  color: #b4b4b4;
}
</style>