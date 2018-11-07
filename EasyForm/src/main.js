// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./assets/css/common.css"

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

Vue.directive("drag", {
  bind: function (el) {
    function dragstart(ev) {
      el.element = el.cloneNode(true);
      el.element.style.position = "absolute";
      el.element.style.width = `${this.offsetWidth}px`;
      el.element.style.border = "1px dashed #5A90CF";
      el.element.style.background = "#EBF6FF";
      el.element = el.parentElement.insertBefore(el.element, el);
      el.style.opacity = 0;
      el.scrollH = el.parentElement.scrollHeight;
      ev.dataTransfer.effectAllowed = "move";
      el.parentElement.style.position = "relative";
      // el.parentElement.style.paddingBottom = `${this.offsetHeight / 2}px`;
    }

    function drag(ev) {
      let dis = this.offsetTop + ev.offsetY;
      if (dis + this.offsetHeight / 2 < el.scrollH) {
        el.element.style.top = `${dis + 18}px`;
      }
    }

    function dragend(ev) {
      el.style.opacity = 1;
      el.element.style.display = "none";
    }

    function dragover(ev) {
      ev.dataTransfer.dropEffect = "move";
      ev.preventDefault();
    }

    el.setAttribute("draggable", "true");
    el.addEventListener("dragstart", dragstart);
    el.addEventListener("drag", drag);
    el.addEventListener("dragend", dragend);
    el.addEventListener("dragover", dragover);
    el._dragstart = dragstart;
    el._drag = drag;
    el._dragend = dragend;
    el._dragover = dragover;
  },
  unbind: function (el) {
    el.removeEventListener("dragstart", el._dragstart);
    el.removeEventListener("drag", el._drag);
    el.removeEventListener("dragend", el._dragend);
    el.removeEventListener("dragover", el._dragover);

  }
});
