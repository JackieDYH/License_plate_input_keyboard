Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    param: {
      type: Object,
      value: {}
    }
  },

  data: {
    show: false,
    masker: true,
    kbType: 'num', // 纯数字: num; 车牌: plate; 支付: pay
    max: 8,
    str: '',
    numArr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    lettArr: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '学', '港', '澳'],
    provArr: ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂', '琼', '川', '贵', '云', '渝', '藏', '陕', '甘', '青', '宁', '新']
  },

  methods: {
    toggle(elem) {
      let elm = this.data[elem]
      this.setData({
        [elem]: !elm
      })
    },
    show() {
      this.init()
    },
    hide() {
      this.setData({
        show: false
      })
    },
    init() {
      let param = this.properties.param || {}
      let provArr = this.data.provArr
      let numArr = this.data.numArr
      this.setData({
        show: true,
        masker: param.masker !== undefined ? param.masker : true,
        kbType: param.kbType || 'num',
        max: param.max || 8,
        str: (param.str + '') || ''
      })
      if (param.kbType == 'park' && provArr.indexOf('临') == -1) {
        provArr.push('临')
        this.setData({
          provArr: provArr
        })
      }
      if ((param.kbType == 'pay' || param.kbType.indexOf('dot') != -1) && numArr.indexOf('.') == -1) {
        numArr.push('.')
        this.setData({
          numArr: numArr
        })
      }
    },
    inpValid(val, cb) {
      let str = this.data.str || ''
      let list = str.split('.') || []
      if (val == '.' && !str) {
        console.warn("输入框为空，不能输入'.'")
      } else if (val == '.' && str.indexOf('.') != -1) {
        console.warn("输入框内容已含有'.'，不能再输入'.'")
      } else if (val != -1 && typeof list[1] !== 'undefined' && list[1].length > 1) {
        console.warn("小数点已有后两位，则不能输入")
      } else if (val != -1 && !isNaN(val) && str == '0') {
        console.warn("已输入0，则不能再连续输入数字，只能输入'.'小数点")
      } else {
        cb && cb()
      }
    },
    _onKey(e) {
      let str = this.data.str || ''
      let max = this.data.max || 8
      let i = e.currentTarget.dataset.i
      if (i == 'cfm') {
        this.hide()
        return
      }
      this.inpValid(i, () => {
        if (i == '-1') {
          this.setData({
            str: str.substr(0, str.length - 1)
          })
          str = this.data.str
        } else if (str.length < max) {
          this.setData({
            str: str + i
          })
          str = this.data.str
        }
        this.triggerEvent('keyEvt', str)
      })
    },
    _onHide() {
      this.hide()
      this.triggerEvent('hideEvt')
    }
  }
})
