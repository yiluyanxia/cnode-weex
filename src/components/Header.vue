<template>
  <div class="header">
    <div class="iconbox"><image class="icon" src="http://cnodejs.org/public/images/cnodejs_light.svg"></image></div>

    <div class="txtbox"><text class="txt">Cnode</text></div>

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
.header{
  width: 100%;
  height: 120px;
  background-color: #444;
  flex-wrap: nowrap;
  flex-direction: row;
}

.iconbox{
  padding: 0 30px;
}
.header .icon{
  width: 120px;
  height: 120px;
}
.header .txtbox{
  height: 120px;
  padding-left: 20px;

}
.header .txt{
  color: #fff;
  line-height: 120px;

}
</style>

