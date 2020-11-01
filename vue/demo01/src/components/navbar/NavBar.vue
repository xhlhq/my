<template>
  <div class="nav-bar">
    <div class="title">E党务</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return {
            picUrl: require("../../assets/image/xingshizhengce.png"),
        }
    }
}
</script>

<style lang="less">
.nav-bar {
  .title {
    font: 22px;
    padding: 10px;
    font-weight: 600;
  }
  .content {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
}

</style>