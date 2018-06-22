<template>
  <div class="nav">
    <img src="../../assets/images/logo.png" alt="logo">
    <div class="main">
      <router-link to="" :class="[{isactive:active.activeNew},'link']" @click.native="change('activeNew')">
        <span>新建表单</span>
      </router-link>
      <router-link to="" :class="[{isactive:active.activeMy},'link']" @click.native="change('activeMy')">
        <span>我的表单</span>
      </router-link>
      <router-link to="" :class="[{isactive:active.activeTpl},'link']" @click.native="change('activeTpl')">
        <span>模板中心</span>
      </router-link>
    </div>
    <img src="../../assets/images/logo.png" alt="user">

  </div>
</template>

<script>
  export default {
    name: "MyHeader",
    data: function () {
      return {
        active: {
          activeNew: false,
          activeMy: false,
          activeTpl: false
        }
      }

    },
    methods: {
      change(info) {
        if (!this.active[info]) {
          for (let val in this.active) {
            if (this.active.hasOwnProperty(val)) {
              this.active[val] = false;
            }
          }
          this.active[info] = true;
        }
      }

    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #35485F;
  }

  .main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 100%;
    color: white;
    text-decoration: none;
  }

  .link span {
    text-align: center;
  }
  .isactive {
    background: #5B90CF;
  }
</style>
