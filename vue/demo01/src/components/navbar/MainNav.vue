<template>
<div id="main-bar">
    <nav-bar class="nav-bar">
      <nav-bar-item path="/map">
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建地图</div>
        </template>
      </nav-bar-item>
      <nav-bar-item path="/information">
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>路由传参</div>
        </template>
      </nav-bar-item>
  </nav-bar>
  <nav-bar class="nav-bar">
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>路由传参</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
  </nav-bar>
  <nav-bar class="nav-bar">
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
  </nav-bar>
  <nav-bar class="nav-bar">
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
      <nav-bar-item>
        <template v-slot:nav-bar-img>
          <img src="../../assets/image/xingshizhengce.png" alt="">
        </template>
        <template v-slot:nav-bar-text>
          <div>党建资讯</div>
        </template>
      </nav-bar-item>
  </nav-bar>
</div>
</template>

<script>
import NavBar from './NavBar'
import NavBarItem from './NavBarItem'
export default {
    name: 'MainNav',
    components: {
        NavBar,
        NavBarItem
    }
}
</script>

<style lang="less">
    @media screen and (min-width: 1200px){
        #main-bar {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            .nav-bar {
                width: 23%;
            }
        }
    }
    @media screen and (min-width: 960px){
        #main-bar {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            .nav-bar {
                width: 32%;
            }
        }
    }
    @media screen and (min-width: 760px){
        #main-bar {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            .nav-bar {
                width: 48%;
            }
        }
    }
    @media screen and (min-width: 560px){
        #main-bar {
            width: 100%;
        }
    }
</style>