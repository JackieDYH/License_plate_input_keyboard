// pages/test1/test2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kb: {
      kbType: "plate", //传入车牌键盘 类型 plate
      str: ''
    },
  },
  //点击输入框弹起键盘
  showKbFn() {
    this.setData({
      ['kb.str']: this.data.form.carNo
    })
    this.kb.show()
  },
  //获取键盘输入的值 并进入赋值给form.carNo
  onKey(e) {
    this.setData({
      ['form.carNo']: e.detail
    })
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