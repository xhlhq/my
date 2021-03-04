<template>
  <div class="chat-show">
      <div class="chatItem" v-for="(item,index) in chatList" :key="'chatList' + index">
        <img :src="item.user.userImg">
        <div class="content">{{item.content}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'chatShow',
  props: ['chatList']
}
</script>

<style scoped>
  .chatItem {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .chatItem>img {
    width: 2.5em;
    border-radius: 50%;
    margin-right: 1em;
  }
</style>