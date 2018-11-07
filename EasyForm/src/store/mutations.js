import state from "./state";


export default {
  increment(state, payload) {
    let {component} = payload;
    //component.id = state.number++;
    state.mList.append(component);
    this.commit("switchCurrent", payload);
    state.components = state.mList.toArray();
    state.components.forEach((v, i) => {
      v.number = i;
    });
  },
  insert(state, payload) {
    let {prev, component} = payload;
    // if (component.id === void 0) {
    //component.id = state.number++;
    // }
    state.mList.insert(prev, component);
    this.commit("switchCurrent", payload);
    state.components = state.mList.toArray();
    state.components.forEach((v, i) => {
      v.number = i;
    });

  },
  remove(state, payload) {
    let {component} = payload;
    if (component === state.currentComponent) {
      let index = state.mList.indexOf(component),
        prevComp = state.mList.getElement(index - 1),
        nextComp = state.mList.getElement(index + 1),
        nextCur;
      if (nextComp) {
        nextCur = {component: nextComp};
      } else if (prevComp) {
        nextCur = {component: prevComp};
      } else {
        nextCur = {component: state.widgets[0]};
      }
      this.commit("switchCurrent", nextCur);
    }
    state.mList.remove(component);
    state.components = state.mList.toArray();
    state.components.forEach((v, i) => {
      v.number = i;
    });

  },
  switchCurrent(state, payload) {
    let {component} = payload;
    state.currentComponent = component;
    state.mList.iterator(v => {
      v.isCurrent = (v === component);
    });
  },
  updateFormSettings(state, payload) {
    let {prop, value} = payload;
    state.formSettings[prop] = value;
  },
  updateComponentSettings(state, payload) {
    let {prop, value} = payload;
    state.currentComponent[prop] = value;
  },
  saveUserInfo(state, payload) {
    let {username, token} = payload;
    state.userInfo = {username, token};
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  },
  getLocalUserInfo(state) {
    state.userInfo = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token")
    }
  },
  safeLoginOut(state) {
    state.userInfo = {};
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  }

}
