<template>
  <div class="wrapper">
    <header></header>
    <chunk></chunk>
  </div>
  
</template>

<script>
import header from "../components/Header.vue";
import chunk from "../components/Chunk.vue";

export default {
  components: {
    header,
    chunk
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
}
</style>

