<template>
  <div class="wrapper">
    <router-view/>
  </div>
  
</template>

<script>

import util from './config/util';
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created(){
    util.initIconFont();
  }
}
</script>
<style src='./assets/css/styles.css' />

