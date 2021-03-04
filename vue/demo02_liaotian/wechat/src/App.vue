<template>
  <div id="app">
    <div class="content">
      <chat-com :currentUser='currentUser'></chat-com>
      <userlist-com :userlist='userlist' @userchoose=userToggle></userlist-com>
    </div>
  </div>
</template>

<script>
import chatCom from './components/chat-com'
import userlistCom from './components/userlist-com'
export default {
  name: 'App',
  components: {
    chatCom,userlistCom
  },
  data(){
    return {
      currentUser: {
        userImg:require('./assets/image/1.jpg'),
        userName:'小刚'
      },
      userlist:[
        {
          userImg:require('./assets/image/1.jpg'),
          userName:'小刚'
        },
                {
          userImg:require('./assets/image/2.jpg'),
          userName:'小蓝'
        },
                {
          userImg:require('./assets/image/3.jpg'),
          userName:'小黑'
        },
                {
          userImg:require('./assets/image/4.jpg'),
          userName:'小秦'
        }
      ]
    }
  },
  methods: {
      userToggle(index){
        this.currentUser = this.userlist[index]
      }
  }
}
</script>

<style scoped>
  .content {
    margin: 100px auto;
    width: 800px;
    height: 700px;
    display: flex;
    border: 1px solid black;
  }
</style>
