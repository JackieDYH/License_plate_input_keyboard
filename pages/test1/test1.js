// pages/test1/test1.js
Page({
  data: {
    territory: "浙",
    plateNo: "",
    plate:"",
  },

  //开启 地域选择键盘
  open: function () { this.setData({ isShow: true, keyBoardType: 1 }); },

  //开启 车牌选择键盘
  openInput: function () { this.setData({ isShow: true, keyBoardType: 2 });},

  //关闭键盘
  close: function () {  this.setData({ isShow: false });},

  //点击了删除
  delete: function (e) {
    if (this.data.plate.length == 0){
      this.setData({keyBoardType: 1});
    }else{
      this.setData({ plateNo: this.data.plateNo.substring(0, this.data.plateNo.length - 1),plate: this.data.plate.substring(0, this.data.plate.length - 1)});
      if (this.data.plate.length == 0){
        this.setData({keyBoardType: 1});
      }
    }
  },

  //点击键盘
  click: function (e) {
    var val = e.detail;
    if (!val) return;
    console.log(e)
    if (this.data.plate.length == 0){
      this.setData({ plate: val,keyBoardType: 2 });
    }else if(this.data.plate.length < 7){
      this.setData({plate: this.data.plate + val});
    }
    //汉字 正则表达式
    // var reg = new RegExp('[u4E00-u9FFF]+', 'g');
    // if (!reg.test(val)) {
    //   this.setData({ territory: val, keyBoardType: 2 });
    // } else {
    //   if (this.data.plateNo.length == 7) return;
    //   this.setData({ plateNo: this.data.plateNo + val });
    // }
  },

  //点击了 小键盘确认
  ok: function (e) { this.setData({ isShow: false }); },

  //单击查询按钮
  select: function(){

    wx.showToast({
      title: "车牌号:" + this.data.territory+this.data.plateNo,
      icon: 'none'
    });
  }
  
})