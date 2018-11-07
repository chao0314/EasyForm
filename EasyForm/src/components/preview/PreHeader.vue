<template>
  <div class="header">
    <router-link :class="{act:active.toLowerCase() === 'computer'}" to="/preview/computer"><img
      src="../../../static/images/computer.png"
      alt="computer"><span>电脑</span></router-link>
    <router-link :class="{act:active.toLowerCase() === 'mobile'}" to="/preview/mobile"><img src="../../../static/images/mobile.png"
                                                                      alt="mobile"><span>手机</span></router-link>
    <router-link to="/"><img src="../../../static/images/back.png" alt="back"><span>返回</span></router-link>
  </div>
</template>

<script>
  export default {
    name: "PreHeader",
    props: {
      active: {
        default: "Computer",
        type: String
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header img {
    width: 32px;
    height: 32px;
  }

  .header span {
    display: block;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
    border: 1px solid transparent;
  }

  a:active {
    border: 1px dashed #5990CF;
  }

  .act {
    border: 1px dashed #5990CF;
  }
</style>
