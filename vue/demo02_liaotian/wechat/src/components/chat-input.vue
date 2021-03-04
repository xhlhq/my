<template>
  <div class="chat-input">
      <input type="text" @keydown.enter="send" v-model="chatContent">
      <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  name: 'chatInput',
  props: ['sendMessage'],
  data () {
      return {
          chatContent: ''
      }
  },
  methods: {
      send(){
          //发送并情况输入框
          this.sendMessage(this.chatContent)
          this.chatContent = ''
      }
  }
}
</script>

<style>

</style>