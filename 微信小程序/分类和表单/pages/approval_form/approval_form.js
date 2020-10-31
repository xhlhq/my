Page({
  data: {
    approvalForm: {
      "approvalBirth": '', //出生时间
      "approvalNation": '', //民族
      "approvalJoinParty": '', //入党时间
      "approvalSex": '', //性别
      "approvalWorktime": '', //参加工作时间
      "approvalRetire": '', //退休时间
      "approvalHealth": '', //健康状况
      "approvalChineseCommunication": '', //国外通讯处（中文）
      "approvalForeignCommunication": '', //国外通讯处（外文）
      "approvalEducation": '', //学历
      "approvalIdcard": '', //身份证号
      "kinsfolkList": [{
        "kinsfolkId": 1,
        "kinsfolkAppellation": '',
        "kinsfolkName": '',
        "kinsfolkIdcard": '',
        "kinsfolkExpatriate": '',
        "kinsfolkWorkSituation": ''
      }]
    },
    selectValue: {
      sex: ['男', '女'],
      education: ['博士', '硕士', '本科', '专科', '中专/高中', '初中', '小学', '无'],
      // expatriate: ['国内','国外'],
    }
  },
  //picker时间选择器传值
  bindDateChange(e) {
    //获取picker传过来的data-key值
    let key = e.currentTarget.dataset.key
    //复制一份form对象
    let formData = this.data.approvalForm
    //按key值赋值
    formData[key] = e.detail.value
    this.setData({
      approvalForm: formData
    })
  },
  //picker普通选择器传值
  bindSelectorChange(e) {
    //获取picker传过来的data-key值
    let key = e.currentTarget.dataset.key
    let selectkey = e.currentTarget.dataset.selectkey
    //复制一份form对象
    let formData = this.data.approvalForm
    let selectItem = this.data.selectValue
    //按key值赋值
    let item = selectItem[selectkey]
    // console.log('selectItem',selectItem,'item',item)
    formData[key] = item[e.detail.value]
    this.setData({
      approvalForm: formData
    })
  },
  //input输入
  bindKeyInput(e) {
    //获取picker传过来的data-key值
    let key = e.currentTarget.dataset.key
    //复制一份form对象
    let formData = this.data.approvalForm
    //按key值赋值
    formData[key] = e.detail.value
    this.setData({
      approvalForm: formData
    })
  },
  //接收子组件传递过来的数据
  kinsfolkFromChildData(e) {
    // console.log('子组件上传的数据',e)
    console.log("e:", e)
    let data = e.detail.params
    // this.setData({
    //   kinsfolkList: data
    // })
    this.data.approvalForm.kinsfolkList = data
    console.log(this.data.approvalForm)
  },
  //数据上传到服务器
  onSubmit() {
    wx.request({
      url: '',
      method: 'POST',
      data: this.data.approvalForm,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data.msg)
        } else if (res.data.code == 1) {
          wx.showToast({
            title: '上传成功',
            icon: 'none',
            duration: 2000,
            mask: true
          })
          wx.navigateTo({
            url: '../display_info/display_info?id=' + res.data.id,
          })
        } else {
          console.log(res.data.msg)
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})