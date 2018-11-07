document.addEventListener("DOMContentLoaded", function () {
  var html = document.querySelectorAll("html")[0];
  html.style.fontSize = 100 * parseInt(html.clientWidth) / 1024 + "px";
  window.addEventListener("resize", function () {
    html.style.fontSize = 100 * parseInt(html.clientWidth) / 1024 + "px";
  })
});
