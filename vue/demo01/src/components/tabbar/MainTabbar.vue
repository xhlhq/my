<template>
   <tabbar>
      <tabbar-item paths='/home' activeColor='skyblue'>
        <template v-slot:tab-bar-img>
          <img src="../../assets/img/tabbar/tab_bar_home_n.svg" alt="">
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="../../assets/img/tabbar/tab_bar_home_a.svg" alt="">
        </template>
        <template v-slot:tab-bar-text>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item paths='/category' activeColor='skyblue'>
        <template v-slot:tab-bar-img>
          <img src="../../assets/img/tabbar/Tab-bar-icons-sort.svg" alt="">
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="../../assets/img/tabbar/Tab-bar-icons-sort-a.svg" alt="">
        </template>
        <template v-slot:tab-bar-text>
          <div>分类</div>
        </template>
      </tabbar-item>
      <!-- <tabbar-item paths='/shopping' activeColor='skyblue'>
        <template v-slot:tab-bar-img>
          <img src="../../assets/img/tabbar/tabbar-icon-ShoppingCart-off-b.svg" alt="">
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="../../assets/img/tabbar/tabbar-icon-ShoppingCart-on-b.svg" alt="">
        </template>
        <template v-slot:tab-bar-text>
          <div>购物车</div>
        </template>
      </tabbar-item> -->
      <tabbar-item paths='/user' activeColor='yellow'>
        <template v-slot:tab-bar-img>
          <img src="../../assets/img/tabbar/tab_bar_user_icon_no.svg" alt="">
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="../../assets/img/tabbar/tab_bar_user_icon_cu.svg" alt="">
        </template>
        <template v-slot:tab-bar-text>
          <div>表单</div>
        </template>
      </tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'
export default {
    name:'MainTabbar',
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>

<style>

</style>