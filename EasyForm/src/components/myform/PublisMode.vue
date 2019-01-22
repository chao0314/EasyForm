<template>
  <div class="mode">
    <div class="link-sharing">
      <div class="link">
        <span>表单连接</span><input type="text" :value="url" readonly><a v-copy="url">复制</a><a
        v-open="url">访问</a>
      </div>
      <div class="sharing">
        <span>社交分享</span><a href=""><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACd0lEQVR42u2Yz08TQRTH+buMkQMHA0EiMYEbwXD0pAbDgRsePCgx4SZKEUV+JoDERNAQ0yDgAahRDD2hu20pXVq6tGy77e7ilzQhwMybziwkCwmbd+jOvvf9bGbevHnbmsOArppr8CUEm0U3/M/qXc48mku1TyebRuIw/MAtBvEIDhcM1szy86XMnQ/xG280gcEBbnC+AHCh7PWvZuvfx8TIkwZnhCDQPziRKz/4tCOPPGkIRLgfcHTXbplI+KNWDOEQUQPv5J174+eiVgwikJIFWyVPPMN3R+PPFtPvfpow/MCteM4hKAV+vZalVGpDOp5mT28b3GKwdlCnovC0OhgZcZvI4boh/dtfi1oz7GM4cAMhyCbaWTBKAfXiH6N58Q6ZjeapWMiKwDnbpapE57whUxaefDGo2gJxEvxds7hhNwe0tURRBhxJFuHMFYE4CabmuW1q2/WkKjDc7k8nZWb7FPjh5xQ35gWzQoLr5coeVwTiJLideNnR3/vy4ImNHFcE4iQYxxw3ZmHrQB6MLccVgbgaGAt8UPLkwahTCFEDc6f6bcRU7S6GIqbaVLPJdSukb6RsVfCmYSNQIbnY7dQ8FndcVe7RpmIPN9F2YgtIw3BsO1fGbC9qlgxySS8MRkwchY1MBRQVEG7JrB+OVVao5FRJsZLrdcwkj0MUSiZVvFAFURaqtlFFx+v7sceubvVDgjoWu74a8gvcvbDr51jkNgLontjczhQc2JnBP4bdOpnw0whQrQ96DzTur1azI7/2Q+vm03Aay4YM6gmnB9ZNDKKlfTyXYvsQhdYnsGYvyPY2yIY+yE+YID/aAv5Mvf4r4kqD/wPb9AQYofiudgAAAABJRU5ErkJggg=="
        alt="qq"></a>
        <a href=""><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADv0lEQVR42u2YWUwTURSGQRN90LglGqOJJibGuESNJu6JRhN3jT7os9FEjSAEhCgoatgRMIjskcSFQJBAgbIUytKylEWgULZS9rXsS1lKoQV/M6GOM512hmL0gZv7cNvee76Ze885/7m1mP9HzWIZ/N+Clao6mTJZ0haZ2eCd0eCFgawnSamq/Vvg7jGZQO7hJzrhwF9vlWBB6fjyXe4xgdy9a7RqycD9E42xlU/sk9fSefRul7QmRvq4b7zBXHBBa7hjyiY2SHJ35G/MawlZJFirm+FVO3JFknu8zE6r03AGx0gfmUMlelT5g7n5OQ7gtHpX86lET6l7zRaM8LDmrVgqsHWCpbQ73jRYo53wyj5s0MQrwY5QyXUcfLrcLar8vm/ucZbP55F1QD2rMgHObwmjr3yRuiWjwXNSM0SeqZubresVBBVeYsMWNwcZA8OWZ/YhyhrntG2do1ImH4TvIMpNgt2z9iNMGMFtw6W2iavJC2wSV+G18NOsbjqpxknU/JHwUtV0H9y+WsknFoYX3TIOhp2WIQkjGEmRsiAw/4L+7P1EJ7+V3SPAAxNNOHJiA/Eq5V2xJl8akcII/lRyhzIb6Ze8q+SgxBhHUNAaUdoRBb9FusBTImUygSOKbzOC34vPUGYXt38xfLRzOvBETYH944rp2fEFF9G2j5Qxbbu/+DQj+E3GLsrsuCpbg+CqHt6Pzmgmj4uueEgHwzgj+GX6drpLj6q7KXaHpzqwwwtu4Y5NJsaRJXeL2z9jMKNVe2YfpJiCcUawT85R+pOGFd2EZ5GnKQZE6MS4Rpla0fVdL2V6102udabY8c45wggOlVwzeDz4Xn+QaPI+ISU26A3OQTESXHiZEYwTNewXolMa7SRyeEn718YBcZbCz2D6Jbd4mT3FSGylFSP4lzwkWNLBAXnnECr6pI9sgNhg0ju0nrGa56mbjUvFH+CpmRF4E2u9c0FQ0akI7reZuymTndK2TmgGjYkENoS95AUVXKzvy4TyIMmj2CBMx1XZ0GciwEyo0+BkiwN/Awe55a2AdiGbQkyxMExyA4r5lLeSPOdZ8jpUjKYLAdQM5os/+SNCi1UFMqOd+pB/fqkqkIC8s5Q0YKzmQrZyE+4zn+qauQdpjluViZCgpz1OHRUP7h+LKejH1EoUWYujBhdeoSd5DjcJiHx2o7+LYCd7JAqELIWvkVKew6VNNd2LyhKnTimMyB0/uQn3oszAPi3xNRU6D20QKnxwP4BsQMogOCGSqwhc3FebhwoxYfkfgWXw7/YTKOwyGd01jKMAAAAASUVORK5CYII="
          alt="wechat"></a>
        <a href=""><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADyklEQVR42u1YaU8TURTlnymGyCZrESgqhdiIoAGMEBU3NiVGE1BwiYkQMBKIREXRuCBKkC0qIhgEiXSndLF036YzeMrUoZ12pgskkEjzPkw7M++8d889597XuLVt+sTtAu9AYNJsso190re1qGuqlGViWX62TCjAhbqmWn/7Jm6RFvMWA7uVCn1rsywva2n/Hp6BpWBZbpVyC4Aph8PQ2S7NSeOHDIA/mL76sINyOmMHJlbUy1XlkUP6j+XqSkKzEguwa/GXoqggNlR6KIoPYZLogAmtRl6YvxlUemASTBUpMGm3xxzhEDGvKseEEQEjm6IGSNwrzUiWpO0PedfQ1REemFAvS7NTo0KVJO+zDn+g3G6PwWAZGlSVH2c9IM0+gDwNAwy9xrBdGIip/wlQvVElSe21RtYzeIAPGNYjy83kh8GGjL3dlsG3mvqLLC4VYhFMxjEzTREEHC1A3HlZpNXKCQzb43WGDPPL55iUcVBpRhKjHI9eh2jr77bCQEi7zTL4hvW6bWKMExiGxylKsYglSo9OJxWkqU6W6Fpu6JqvQ/R4HcuSH861fnwP95CkJgREu62FE1h9riokqrKkmNBp2W5KuN0yKRhloiUrEMBiVRWlINtjNLKSHJNzArOIYehxK+T+KnctLoBIBIC0bdDmWvoNpJXa85L0RPvnScfsDJIuYPVlYk5glJdgYLBF33XOz2mb6qENf9a1TQ1YhxdYKlGIhD6MY0WKo0eCaxc3sFDAzuGK0jWKwi3j4x5Jipcz7AnKwVCfOeWTaU6afeqrl3Wj8c+9Ns7cFAqiCLWxr9fL3+gI/dU80O9HMqm5WufTUuUJyuOhf+ayW75Qo7Vga2B8FL9rGi8z2WGf+uL4MYuw09dMGCmng18amDwKOVnevV4HrsU1wuhcmPdGu+4CrWZkL/0Yts5MEmyZIc0r0EDGR9nLXN+lY3pqKSkeJDl/zoFddEK0jiHudYkXMjUf1HBxbJsc57FMiywvM2RtcXz/hkSFoE0vnlmHhwydD1BroR8ECZ5Fv2562sfTjvFZJhdDmit1LskS5XJBnas9j1a7uwzt960jw6TJ5OsGFXKYF4/d6u/cClcWV9T+SvWvfeqzp82vBpBZKJ1wKBRBpBgir2m4xJh2yAFnDe6/QjQC6BHDFOCUBCB5HTExPpK6iQkjb30qtq71qYi09fEGXKeV//O/TTV7ImFwddmR7e12NvQbR5iuDjQV0RxhMjZ7hNk4tKmUMDzU+TCMFuSg9SGWVVt9TLVY4Kmcx9SJMZY37f4j8L8D/wW1a45TNAA0LgAAAABJRU5ErkJggg=="
          alt="weibo"></a>
      </div>

    </div>

    <div class="two-dimension">
      two dimension
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "PublisMode",
    directives: {
      copy: {
        inserted(el,binding) {
          el.addEventListener('click', function (e) {
            let oInput = document.createElement("input");
            oInput.setAttribute("value", binding.value);
            document.body.appendChild(oInput);
            oInput.focus();
            oInput.setSelectionRange(0, binding.value.length);
            document.execCommand("copy");
            oInput.style.display = "none";
          })
        }
      },
      open: {
        inserted(el,binding) {
          el.addEventListener("click", function (e) {
            window.open(binding.value,"_blank");
          })
        }
      }

    },
    computed: {
      ...mapState({
        url: "formUrl"
      })
    }
  }
</script>

<style scoped>
  .mode {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

  }

  .two-dimension {
    width: 100px;
    height: 100px;
    background: pink;
  }

  .link-sharing {
    padding: 0 20px;
  }

  .link {
    height: 70px;
    line-height: 70px;
  }

  .link > input {
    margin-left: 30px;
    outline: none;
    height: 20px;
    width: 360px;
    border-radius: 2px;
    border: 1px solid #CDCDCD;
  }


  .link > a {
    margin: 0 10px;
    display: inline-block;
    height: 20px;
    width: 30px;
    line-height: 20px;
    background: #5990CF;
    text-align: center;
    border-radius: 1px;
    color: white;
    cursor: pointer;
  }

  .link > a:nth-child(4) {
    background: #cdcdcd;
    color: #000;
  }

  .link > a:active {
    box-shadow: 2px 2px white inset;
  }

  .sharing > a {
    display: inline-block;
  }

  .sharing > a:nth-child(2) {
    margin-left: 28px;
  }

  .sharing > a > img {
    vertical-align: middle;
    width: 30px;
    height: 30px;
  }

</style>
