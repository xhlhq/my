<template>
  <div class="chat">
      <h1>聊天框</h1>
      <h4>用户：{{currentUser.userName}}</h4>
      <chat-show :chatList="chatList"></chat-show>
      <chat-input :sendMessage="sendMessage"></chat-input>
  </div>
</template>

<script>
import chatShow from './chat-show'
import chatInput from './chat-input'
export default {
  name: 'chatCom',
  components: {
      chatShow,
      chatInput
  },
  data(){
      return {
          chatList: [
            {
                  user: {
                  userImg:require('../assets/image/1.jpg'),
                  userName:'小刚'
              },
              content: '你好啊！'
            }
          ]
      }
  },
  props: ['currentUser'],
  methods: {
    sendMessage(message){
        this.chatList.push(
            {
                  user: {
                  userImg:require('../assets/image/1.jpg'),
                  userName:'小刚'
              },
              content: message
            }
        ) 
        this.chatList.push(
            {
              user: this.$root.$children[0].currentUser,
              content: new Date()
            }
        ) 
    }
  }
}
</script>

<style>
.chat {
    width: 500px;
    height: 100%;
}
</style>