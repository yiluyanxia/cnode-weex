<template>
  <div class="wrapper">
    <chunk :topics="topicsList"></chunk>
    <home-head></home-head>
    <side @switchTab="switchTabFun"></side>
  </div>
  
</template>


<script>
import chunk from "../components/Chunk.vue";
import HomeHead from "../components/HomeHead.vue";
import side from "../components/Side.vue";
import * as apis from "../api/index";

export default {
  components: {
    chunk,
    "home-head": HomeHead,
    side
  },
  data() {
    return {
      paramsKey: {
        page: 1,
        limit: 10,
        tab: "all",
        mdrender: false
      },
      topicsList: []
    };
  },
  computed: {},
  mounted() {
    this.getList();
  },
  methods: {
    switchTabFun(data) {
      console.log(data);
      this.paramsKey.tab = data;
      this.getList();
    },
    getList(params) {
      let _this = this;
      var params = this.paramsKey;
      apis.getTopics(params, function(retdata) {
        _this.topicsList = retdata.data;
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 750px;
  background-color: rgb(239, 239, 239);
  position: relative;
  padding-top: 120px;
}
</style>

