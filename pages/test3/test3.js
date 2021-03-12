// pages/test3/test3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Pattern: "切换为新能源",
    isKeyboard: !1,
    isNumberKB: !1,
    tapNum: !1,
    disableKey: "1234567890港澳学",
    keyboardNumber: "1234567890ABCDEFGHJKLMNPQRSTUVWXYZ港澳学",
    keyboard1: "京沪粤津冀晋蒙辽吉黑苏浙皖闽赣鲁豫鄂湘桂琼渝川贵云藏陕甘青宁新",
    inputPlates: {
      index0: "",
      index1: "",
      index2: "",
      index3: "",
      index4: "",
      index5: "",
      index6: "",
      index7: ""
    },
    inputOnFocusIndex: "",
    flag: true,
    showpopup: false,
    columns: [],
    carId: '',
  },

  // 弹出
  showCarNo(e) {
    let currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
    this.inputClick({
      target: {
        dataset: {
          id: "0"
        }
      }
    })
  },

  close() {
    var currentStatu = "close";
    this.util(currentStatu)
  },

  carNoConfirm() {
    var currentStatu = "close";
    this.util(currentStatu)
  },

  carNoCancel() {
    var currentStatu = "close";
    this.util(currentStatu)
    this.setData({
      carId: ''
    })
  },

  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长
      timingFunction: "linear", //线性
      delay: 0 //0则不延迟
    });

    // 第2步：这个动画实例赋给当前的动画实例
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
    animation.translateY(480).step();

    // 第4步：导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
      this.setData({
        animationData: animation
      })

      //关闭抽屉
      if (currentStatu == "close") {
        this.setData({
          showModalStatus: false
        });
      }
    }.bind(this), 200)
    // 显示抽屉
    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
    }
  },


  //切换车牌
  changeplate: function () {
    var that = this;
    console.log(1)
    that.setData({
      flag: false,
      inputPlates: {
        index0: "",
        index1: "",
        index2: "",
        index3: "",
        index4: "",
        index5: "",
        index6: "",
        index7: ""
      },
    })
  },
  //切换车牌
  changeplate1: function () {
    console.log(2)
    var that = this;
    that.setData({
      flag: true,
      inputPlates: {
        index0: "",
        index1: "",
        index2: "",
        index3: "",
        index4: "",
        index5: "",
        index6: "",
        index7: ""
      },
    })
  },

  inputClick: function (t) {
    var that = this;
    console.log('输入框:', t)
    that.setData({
      inputOnFocusIndex: t.target.dataset.id,
      isKeyboard: !0
    })
    "0" == this.data.inputOnFocusIndex ? that.setData({
      tapNum: !1,
      isNumberKB: !1
    }) : "1" == this.data.inputOnFocusIndex ? that.setData({
      tapNum: !1,
      isNumberKB: !0
    }) : that.setData({
      tapNum: !0,
      isNumberKB: !0
    });

  },

  //键盘点击事件
  tapKeyboard: function (t) {
    var that = this;
    t.target.dataset.index;
    var a = t.target.dataset.val;
    console.log('键盘:', a)
    if (this.data.Pattern == "切换为普通车") {
      switch (this.data.inputOnFocusIndex) {
        case "0":
          this.setData({
            "inputPlates.index0": a,
            inputOnFocusIndex: "1"
          });
          break;

        case "1":
          this.setData({
            "inputPlates.index1": a,
            inputOnFocusIndex: "2"
          });
          break;

        case "2":
          this.setData({
            "inputPlates.index2": a,
            inputOnFocusIndex: "3"
          });
          break;

        case "3":
          this.setData({
            "inputPlates.index3": a,
            inputOnFocusIndex: "4"
          });
          break;

        case "4":
          this.setData({
            "inputPlates.index4": a,
            inputOnFocusIndex: "5"
          });
          break;

        case "5":
          this.setData({
            "inputPlates.index5": a,
            inputOnFocusIndex: "6"
          });
          break;

        case "6":
          this.setData({
            "inputPlates.index6": a,
            inputOnFocusIndex: "7"
          });
          break;

        case "7":
          this.setData({
            "inputPlates.index7": a,
            inputOnFocusIndex: "7"
          });

      }
    } else {
      switch (this.data.inputOnFocusIndex) {
        case "0":
          this.setData({
            "inputPlates.index0": a,
            inputOnFocusIndex: "1"
          });
          break;

        case "1":
          this.setData({
            "inputPlates.index1": a,
            inputOnFocusIndex: "2"
          });
          break;

        case "2":
          this.setData({
            "inputPlates.index2": a,
            inputOnFocusIndex: "3"
          });
          break;

        case "3":
          this.setData({
            "inputPlates.index3": a,
            inputOnFocusIndex: "4"
          });
          break;

        case "4":
          this.setData({
            "inputPlates.index4": a,
            inputOnFocusIndex: "5"
          });
          break;

        case "5":
          this.setData({
            "inputPlates.index5": a,
            inputOnFocusIndex: "6"
          });
          break;

        case "6":
          this.setData({
            "inputPlates.index6": a,
            inputOnFocusIndex: "6"
          });
          break;
      }
    }
    var n = this.data.inputPlates.index0 + this.data.inputPlates.index1 + this.data.inputPlates.index2 + this.data.inputPlates.index3 + this.data.inputPlates.index4 + this.data.inputPlates.index5 + this.data.inputPlates.index6 + this.data.inputPlates.index7
    console.log('车牌号:', n)
    that.setData({
      carId: n
    })
    this.checkedSubmitButtonEnabled();
  },
  //键盘关闭按钮点击事件
  tapSpecBtn: function (t) {
    var a = this;
    var e;
    if (t) {
      e = t.target.dataset.index
    } else {
      e = '1'
    }
    if (0 == e) {
      switch (parseInt(this.data.inputOnFocusIndex)) {
        case 0:
          this.setData({
            "inputPlates.index0": "",
            inputOnFocusIndex: "0"
          });
          break;

        case 1:
          this.setData({
            "inputPlates.index1": "",
            inputOnFocusIndex: "0"
          });
          break;

        case 2:
          this.setData({
            "inputPlates.index2": "",
            inputOnFocusIndex: "1"
          });
          break;

        case 3:
          this.setData({
            "inputPlates.index3": "",
            inputOnFocusIndex: "2"
          });
          break;

        case 4:
          this.setData({
            "inputPlates.index4": "",
            inputOnFocusIndex: "3"
          });
          break;

        case 5:
          this.setData({
            "inputPlates.index5": "",
            inputOnFocusIndex: "4"
          });
          break;

        case 6:
          this.setData({
            "inputPlates.index6": "",
            inputOnFocusIndex: "5"
          });
          break;

        case 7:
          this.setData({
            "inputPlates.index7": "",
            inputOnFocusIndex: "6"
          });
      }
      this.checkedSubmitButtonEnabled();
    } else 1 == e && a.setData({
      isKeyboard: !1,
      isNumberKB: !1,
      inputOnFocusIndex: ""
    });
  },
  //键盘切换
  checkedKeyboard: function () {
    var t = this;
    "0" == this.data.inputOnFocusIndex ? t.setData({
      tapNum: !1,
      isNumberKB: !1
    }) : "1" == this.data.inputOnFocusIndex ? t.setData({
      tapNum: !1,
      isNumberKB: !0
    }) : this.data.inputOnFocusIndex.length > 0 && t.setData({
      tapNum: !0,
      isNumberKB: !0
    });
  },

  checkedSubmitButtonEnabled: function () {
    this.checkedKeyboard();
    var t = !0;
    for (var a in this.data.inputPlates)
      if ("index7" != a && this.data.inputPlates[a].length < 1) {
        t = !1;
        break;
      }
  },
  theChangeplate(e) {
    console.log(e)
    // if (this.data.Pattern == "切换为新能源") {
    if (e.target.dataset.flag == "2") {
      this.changeplate()
      this.setData({
        Pattern: "切换为普通车"
      })
      // } else if (this.data.Pattern == "切换为普通车") {
    } else if (e.target.dataset.flag == "1") {
      this.changeplate1()
      this.setData({
        Pattern: "切换为新能源"
      })
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