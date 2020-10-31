// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    kinsfolkList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    expatriate: ['国内', '国外']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //picker普通选择器传值
    bindSelectorChange(e) {
      //获取picker传过来的data-key值
      let key = e.currentTarget.dataset.key
      let index =e.currentTarget.dataset.index
      //复制一份kinsfolkList数组
      let kinsfolkData = this.data.kinsfolkList
      //取数组对象
      let kinsfolkDataItem = kinsfolkData[index]
      //取picker可选值
      let selectItem = this.data.expatriate
      //根据key赋值
      kinsfolkDataItem[key] = selectItem[e.detail.value]
      this.setData({
        kinsfolkList: kinsfolkData
      })
    },
    //亲属输入
    bindKinsfolkInput(e) {
      //获取picker传过来的data-key值
      let key = e.currentTarget.dataset.key
      let index =e.currentTarget.dataset.index
      //复制一份kinsfolkList数组
      let kinsfolkData = this.data.kinsfolkList
      //按索引取数组内的对象
      let kinsfolkDataItem = kinsfolkData[index]
      //按key值赋值
      kinsfolkDataItem[key] = e.detail.value
      this.setData({
        kinsfolkList: kinsfolkData
      })
      console.log("子组件上传",this.data.kinsfolkList)
    },
    // 添加亲属卡
    addKinsfolk(e){
      let index =e.currentTarget.dataset.index
      let obj = {
        "kinsfolkId": index + 2,
        "kinsfolkAppellation": '',
        "kinsfolkName": '',
        "kinsfolkIdcard": '',
        "kinsfolkExpatriate": '',
        "kinsfolkWorkSituation": ''
      };
      let kinsfolkData = this.data.kinsfolkList
      // kinsfolkData.push(obj)
      kinsfolkData.splice(index+1,0,obj)
      console.log(kinsfolkData)
      this.setData({
        kinsfolkList: kinsfolkData
      })
    },
    //删除亲属卡
    subKinsfolk(e){
      let index =e.currentTarget.dataset.index
      let kinsfolkData = this.data.kinsfolkList
      kinsfolkData.splice(index,1)
      this.setData({
        kinsfolkList: kinsfolkData
      })
    },
    //数据上传给父组件
    uploadParent(e){
      console.log('调用上传')
      this.triggerEvent('kinsfolkDataUpload',{params: this.data.kinsfolkList})
    },
    //当输入框失去焦点,数据传给父组件
    onBlur(){
      this.uploadParent()
    }
  },
  onReady: function () {
    
  }
})