// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    moreItem:{
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function(e){
      console.log(e);
      console.log('click');
      let url = e.currentTarget.dataset.url;
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: url
      })
      // wx.redirectTo({
      //   url: 'test?id=1'
      // })
    }
  },
  onReady: function () {
    
  }
})