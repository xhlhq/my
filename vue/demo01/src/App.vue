<template>
  <div id="app">    
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from './components/tabbar/MainTabbar'
export default {
  components: {
    MainTabbar
  },
  data() {
    return {
      
    };
  },
};
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
