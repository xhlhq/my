<template>
  <div id="app">
    <div class="navBar">
      <div class="navItem">
        <div class="title">E党务</div>
        <div class="content">
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
        </div>
      </div>
      <div class="navItem">
        <div class="title">E党务</div>
        <div class="content">
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
          <div class="item">
            <div class="img">
              <img :src="picUrl" alt="" />
            </div>
            <div class="text">党群地图</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <nav-item></nav-item>
    <router-view/> -->
  </div>
</template>
<script>
// import NavItem from 'components/navItem/navItem'
export default {
  // components: {
  //   NavItem
  // }
  data() {
    return {
      picUrl: require("./assets/image/xingshizhengce.png"),
    };
  },
};
</script>
<style lang="less">
.narBar {
  width: 60vw;
  margin: 0 auto;
  display: flex;
  align-content: center;
  .navItem {
    max-width: 100%;
    .title {
      font: 20px;
      padding: 10px;
      font-weight: 600;
    }
    .content {
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      .item {
        width: 32%;
        margin-left: 1%;
        margin-bottom: 20px;
        background-color: skyblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        .img {
          width: 50px;
          height: 50px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
