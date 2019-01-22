export default {
  install(V, type = "_blank") {
    V.prototype.$open = (url) => {
      window.open(url, type);
    }
  }
}
