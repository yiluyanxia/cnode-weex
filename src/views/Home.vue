<template>
  <div class="wrapper">
    <chunk></chunk>
    <header></header>
  </div>
  
</template>

<script>
import header from "../components/Header.vue";
import chunk from "../components/Chunk.vue";
// import side from "../components/Side.vue";

export default {
  components: {
    header,
    chunk,
    // side
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
.wrapper{
  width: 750px;
  background-color: rgb(239, 239, 239);
  position: relative;
  padding-top: 120px;

}
</style>

