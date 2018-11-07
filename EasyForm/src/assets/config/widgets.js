export default [
  {
    type: -1,
    number: 0,
    name: "初始",
    img: "init.png",
    value: "init",
    description: "",
    defaultValue: "",
    options: [{
      value: "选项内容1"
    }, {
      value: "选项内容2"
    }
    ],
    validate: {
      required: true
    }
  },
  {
    type: 0,
    number: 0,
    name: "单行文本",
    img: "text.png",
    value: "SingleText",
    description: "",
    defaultValue: "",
    validate: {
      required: true
    }
  },

  {
    type: 1,
    number: 0,
    name: "多行文本",
    img: "multitext.png",
    value: "MultiText",
    description: "",
    defaultValue: "",
    validate: {
      required: true
    }
  },
  {
    type: 2,
    name: "单选框",
    img: "radio.png",
    value: "Radio",
    description: "",
    validate: {
      required: true
    },
    options: [{
      value: "选项内容"
    }, {
      value: "选项内容"
    }
    ]
  },
  {
    type: 3,
    name: "多选框",
    img: "checkbox.png",
    value: "CheckBox",
    description: "",
    validate: {
      required: true
    },
    options: [{
      value: "选项内容"
    }, {
      value: "选项内容"
    }
    ]
  },
  {
    type: 4,
    name: "下拉框",
    img: "section.png",
    value: "Select",
    description: "",
    validate: {
      required: true
    },
    options: [{
      value: "选项内容"
    }, {
      value: "选项内容"
    }
    ]
  },
  {
    type: 5,
    name: "时间",
    img: "time.png",
    value: "Time",
    description: "",
    defaultValue: "00:00",
    validate: {
      required: true
    }
  },
  {
    type: 6,
    name: "日期",
    img: "date.png",
    value: "Date",
    description: "",
    defaultValue: "",
    validate: {
      required: true
    },
  }
]
