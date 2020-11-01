<template>
  <div class="tab-bar-item" @click='onClick'>
    <div v-if="!isActive">
      <slot name="tab-bar-img"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props: {
      paths:String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data () {
      return {
        //isActive:true
      }
    },
    methods: {
      onClick(){
        this.$router.push(this.paths);
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.paths) !== -1 
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 2px;
      vertical-align: middle;
  }
</style>