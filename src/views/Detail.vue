<template>
  <div class="detail padding-bottom-16">
    <header></header>
    <detail-chunk :topic="topic"></detail-chunk>
    <div class="total-reply">
      <text class="txt">{{topic.reply_count}}条回复</text>
    </div>
    <reply :replies="replies"></reply>
    
  </div>

</template>

<script>
import header from "../components/Header1.vue";
import detailChunk from "../components/DetailChunk.vue";
import reply from "../components/Reply.vue";
import * as apis from "../api/index";

export default {
  components: {
    header,
    detailChunk,
    reply
  },
  data() {
    return {
      topic:{},
      replies:[]
    };
  },
  computed: {},
  mounted() {
     let params = this.$route.query.id;
    this.getList(params);
  },
  methods: {
    getList: function(params) {
      let _this = this;
      apis.getTopic(params, function(retdata) {
        _this.topic = retdata.data;     
        _this.replies = retdata.data.replies;     
      });
    },
  }
};
</script>

<style scoped>
.detail{
  background-color: #eee;
}
.total-reply{
  border-bottom: 2px solid #e5e5e5;  
  padding: 30px;
  background-color: #fff;
  margin-top: 16px;

}
.total-reply .txt{
  font-size: 32px;
  color: #333;
}
</style>