<template>
  <div class="error">
    <img src="../../../static/images/404.png" alt="404">
    <p>哎呀迷路了...</p>
    <div class="msg">
      <slot v-if="message !== void 0">
        {{message}}
      </slot>
      <ul v-else>
        <li>可能的原因：</li>
        <li>不靠谱的网络错误</li>
        <li>服务器被外星人劫持</li>
      </ul>
    </div>
    <a @click="goHome">
      返回首页
    </a>
  </div>
</template>

<script>
  export default {
    name: "Error",
    props: {
      message: {
        default: void 0
      }
    },
    methods:{
      goHome(){
        this.$router.push({path:"/"})
      }
    }
  }
</script>

<style scoped>
  .error {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .error > img {
    margin: 5% 0 20px;
    width: 200px;
    height: 200px;
  }

  .error > p {
    font-size: 16px;
    margin-bottom: 10px;
    width: 70%;
    text-align: center;
    border-bottom: 1px solid #f6f6f6;
  }

  .msg > ul > li {
    color: #9ca4ac;
  }

  .msg > ul > li {
    margin-left: 40px;
  }

  .msg > ul > li:first-child {
    list-style: none;
    margin: 0;
  }

  .error > a {
    display: block;
    text-decoration: none;
    margin-top: 20px;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ebedef;
    background: #239bf0;
    color: white;
    border-radius: 3px;
  }

  .error > a:active {
    box-shadow: 1px 1px  black inset;

  }

</style>
