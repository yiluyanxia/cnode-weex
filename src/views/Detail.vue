<template>
  <div class="detail padding-bottom-16">
    <header></header>
    <detail-chunk></detail-chunk>
    <div class="total-reply">
      <text class="txt">3条回复</text>
    </div>
    <reply></reply>
    <reply></reply>
  </div>

</template>

<script>
import header from "../components/Header1.vue";
import detailChunk from "../components/DetailChunk.vue";
import reply from "../components/Reply.vue";

export default {
  components: {
    header,
    detailChunk,
    reply
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
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