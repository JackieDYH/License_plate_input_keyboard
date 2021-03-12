Component({

  // externalClasses: ['v-panel'],

  properties: {
    isShow: {
      type: Boolean,
      value: true,
    },
    buttonBorder: {
      type: String,
      value: "1px solid #ccc"
    },
    backgroundColor: {
      type: String,
      value: "#fff"
    },
    //1为省份键盘，其它为英文键盘
    keyBoardType: {
      type: Number,
      value: 1,
    }
  },
  data: {
    keyVehicle1: '京沪浙苏粤鲁晋冀',
    keyVehicle2: '豫川渝辽吉黑皖鄂',
    keyVehicle3: '湘赣闽陕甘宁蒙津',
    keyVehicle4: '贵云桂琼青新藏',
    keyNumber: '1234567890',
    keyEnInput1: 'ABCDEFGHJK',
    keyEnInput2: 'LMNPQRSTU',
    keyEnInput3: 'VWXYZ港澳学',
  },
  methods: {
    vehicleTap: function (event) {
      let val = event.target.dataset.value;
      switch (val) {
        case 'delete':
        console.log("delete");
          this.triggerEvent('delete');
          this.triggerEvent('inputchange');
          break;
        case 'ok':
          console.log("ok");
          this.triggerEvent('ok');
          break;
        default:
          console.log("输入" + val);
          this.triggerEvent('inputchange', val);
      }
    },
  }
});
