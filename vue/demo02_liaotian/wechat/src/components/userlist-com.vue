<template>
  <div class="userlist">
      <h1>用户列表</h1>
      <ul>
          <li @click=userClick(index) v-for="(item,index) in userlist" :key="'userlist' + index">
              <img class="userImg" :src="item.userImg" alt="头像">
              <span>{{item.userName}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'userlistCom',
  props: ['userlist'],
  data(){
      return {

      }
  },
  methods: {
      userClick(index){
          this.$emit('userchoose',index)
      }
  }
}
</script>

<style scope>
.userlist {
    width: 300px;
    height: 100%;
    background: skyblue;
}
.userlist ul li {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;
}
.userImg {
    width: 4em;
    margin-right: 1em;
}
</style>