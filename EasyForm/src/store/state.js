import List from "../assets/utils/List";
import widgets from "../assets/config/widgets";
import formSettings from "../assets/config/formSettings";

export default {
  widgets,
  formSettings,
  formUrl: '',
  userInfo: {},
  components: [],
  mList: new List(),
  currentComponent: widgets[0],
  instanceResult: {
    user: "admin",
    id: 123,
    time: "2019-1-17",
    components: [{name: "单行文本", number: 0},
      {name: "多行文本", number: 1},
      {name: "单选框", number: 2},
      {name: "多选框", number: 3},
      {name: "日期", number: 4},
      {name: "时间", number: 5},{name: "单行文本", number: 0},
      {name: "多行文本", number: 1},
      {name: "单选框", number: 2},
      {name: "多选框", number: 3},
      {name: "日期", number: 4},
      {name: "时间", number: 5}],
    answer: [
      {number: 5, value: "v时间"},
      {number: 4, value: "v日期"},
      {number: 3, value: "v多选框"},
      {number: 2, value: "v单选框"},
      {number: 1, value: "v多行文本"},
      {number: 0, value: "v单行文本"}]
  }


}
