// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // work: {************************************************** 传入组件的数据名称
    //   title: 'E党务',**************************************** 标题
    //   list: [{*********************************************** item列表
    //       id: 1,
    //       statusClass,*************************************** 开发状态样式名称 开发中：dev
    //       itemStatus: '', //开发状态************************** 开发状态 开发中
    //       itemImg: '../../images/more/zhengce_1.png',******** 图片地址
    //       itemText: '三科一会',******************************* 文字
    //       url: '../work/work' ******************************* 跳转页面
    //     }]
    //  }
    work: {
      title: 'E党务',
      list: [{
          id: 1,
          itemStatus: '', //开发状态
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '三科一会',
          url: '../work/work' //跳转页面
        },
        {
          id: 2,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '专题活动',
          url: '../work/work'
        },
        {
          id: 3,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '场地预约',
          url: '../work/work'
        },
        {
          id: 4,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '政治生日',
          url: '../work/work'
        },
        {
          id: 5,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '党群地图',
          url: '../work/work'
        },
        {
          id: 6,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '参观预约',
          url: '../work/work'
        },
        {
          id: 7,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '榜单排行',
          url: '../work/work'
        },
        {
          id: 8,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '党性体验',
          url: '../work/work'
        },
        {
          id: 6,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '先锋指数',
          url: '../work/work'
        },
        {
          id: 7,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '党员积分',
          url: '../work/work'
        },
      ]
    },
    classroom: {
      title: 'E课堂',
      list: [{
          id: 1,
          itemStatus: '', //开发状态
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '党建资讯',
          url: '../work/work' //跳转页面
        },
        {
          id: 2,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '公告',
          url: '../work/work'
        },
        {
          id: 3,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '空中课堂',
          url: '../work/work'
        },
        {
          id: 4,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '视频学习',
          url: '../work/work'
        },
        {
          id: 5,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '远教学习',
          url: '../work/work'
        }
      ]
    },
    guide: {
      title: 'E领跑',
      list: [{
          id: 1,
          itemStatus: '', //开发状态
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '党费缴纳',
          url: '../work/work' //跳转页面
        },
        {
          id: 2,
          statusClass: 'dev',
          itemStatus: '开发中',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '人才服务',
          url: '../work/work'
        },
        {
          id: 3,
          itemStatus: '',
          itemImg: '../../images/more/zhengce_1.png',
          itemText: '出国境申请',
          url: '../work/work'
        }
      ]
    },
    platform: {
      title: 'E平台',
      list: [{
          id: 1,
          statusClass: 'dev',
          itemStatus: '开发中', //开发状态
          itemImg: '../../images/more/zhengce_1.png',
          itemText: 'E平台',
          url: '../work/work' //跳转页面
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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