import template from "../../static/js/template";
import fragments from "../assets/config/fragments";

export default {
  getWidget({widgets}) {
    return function (type) {
      return Object.assign({}, widgets.find(function (v) {
        return v.type === type;
      }))
    }
  },
  getComponent: ({components}) => (id) =>
    components.find(v => parseInt(id) === v.id),

  getRawPage: () => (payload) => {
    let {components, formSettings} = payload,
      rawPage = `${fragments["begin"]}${template.compile(fragments["header"])(formSettings)}`;
    components.forEach((v) => {
      rawPage = `${rawPage}${template.compile(fragments[v.value])(v)}`;
    });
    rawPage = `${rawPage}${fragments["footer"]}${fragments["over"]}`;
    return rawPage;
  }
}
