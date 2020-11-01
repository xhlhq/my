<template>
  <div class="nav-bar-item" @click="onClick">
    <div>
      <slot name="nav-bar-img"></slot>
    </div>
    <div>
      <slot name="nav-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBarItem',
    props: {
        path: String
    },
    methods: {
        onClick(){
            this.$router.replace(this.path + '?id=20')
        }
    }
}
</script>

<style lang='less'>
    .nav-bar-item {
        width: 32%;
        margin-right: 1%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: pink;
        img {
            width: 40px;
        }
    }
</style>