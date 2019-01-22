export default {
  install(V, options) {
    V.prototype.$copy = (value) => {
      let oInput = document.createElement("input");
      oInput.setAttribute("value", value);
      document.body.appendChild(oInput);
      oInput.focus();
      oInput.setSelectionRange(0, value.length);
      document.execCommand("copy");
      oInput.style.display = "none";
    }

  }
}
