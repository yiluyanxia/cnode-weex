<template>
  <div class="page login">
    <head title="登录" back="true"></head>
    <div class="lg-top">
      <image class="logo" src="https://cnodejs.org/public/images/cnodejs_light.svg"></image>
    </div>
    <div class="loginform">
      <input type="text" placeholder="Access Token" class="iptbox" :autofocus=true value="" @change="onChange" @input="onInput"/>
      <text class="btnbox" @click="LoginFun">登录</text>
    </div>

  </div>

</template>

<script>
import Head from "../components/Head.vue";
import * as apis from "../api/index";

// var stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
export default {
  components: {
    head: Head,
    accessToken: ""
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    showToast(event) {
      console.log("will show toast");
      modal.toast({
        message: "This is a toast",
        duration: 0.3
      });
    },

    onChange: function(event) {
      this.accessToken = event.value;
    },

    onInput: function(event) {
      this.accessToken = event.value;
    },

    LoginFun() {
      let _this = this;
      if (_this.accessToken == null) {
        modal.toast({
          message: "Access Token 不能为空",
          duration: 2
        });
        return;
      }
      let params = {
        accesstoken: _this.accessToken
      };
      apis.Login(params, function(ret) {
        if (ret.status == 401) {
          modal.toast({
            message: ret.data.error_msg,
            duration: 2
          });
        }

        if (ret.ok) {
          console.log(ret);
          if (ret.data.success) {
            _this.$router.push({
              path: "/home",
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.page {
  padding-top: 118px;
  background-color: #efefef;
  height: 100vh;
}
.loginform {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 320px; */
  width: 688px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  padding-top: 60px;
  padding-right: 30px;
  padding-bottom: 60px;
  padding-left: 30px;
  background-color: #fff;
}
.iptbox {
  width: 600px;
  height: 80px;
  border-bottom-color: #80bd01;
  border-bottom-width: 4px;
  font-size: 34px;
  color: #333;
  margin-bottom: 56px;
}
.btnbox {
  width: 600px;
  height: 80px;
  line-height: 80px;
  border-radius: 6px;
  background: linear-gradient(to right, #80bd01, #6ba44e);
  font-size: 34px;
  text-align: center;
  color: #fff;
}
.lg-top {
  background-color: #444;
  height: 300px;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
}
.logo {
  width: 400px;
  height: 95px;
}
</style>