<template>
  <div class="nav">
    <img src="../../../static/images/logo.png" alt="logo">
    <div class="main">
      <router-link to="/" :class="[{isactive:active.activeNew},'link']" @click.native="change('activeNew')">
        <span>新建表单</span>
      </router-link>
      <router-link to="" :class="[{isactive:active.activeMy},'link']" @click.native="change('activeMy')">
        <span>我的表单</span>
      </router-link>
      <router-link to="" :class="[{isactive:active.activeTpl},'link']" @click.native="change('activeTpl')">
        <span>模板中心</span>
      </router-link>
    </div>
    <div class="user">
      <img src="../../../static/images/user_man.png" alt="user" @mouseover="showInfo = true">
      <ul v-show="showInfo" @mouseleave="showInfo = false">
        <li></li>
        <li><span>{{username}}</span></li>
        <li v-show="showLoginOut" @click="loginOut"><span>安全退出</span></li>
        <li v-show="showLoginIn" @click="loginIn"><span>请登录</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "MyHeader",
    data: function () {
      return {
        active: {
          activeNew: true,
          activeMy: false,
          activeTpl: false
        },
        showInfo: false,
        showLoginIn: false,
        showLoginOut: false,
        username: "您好"
      }

    },
    computed: {
      ...mapState({userInfo: "userInfo"})
    },
    methods: {
      ...mapMutations({safeLoginOut: "safeLoginOut"}),
      change(info) {
        if (!this.active[info]) {
          for (let val in this.active) {
            if (this.active.hasOwnProperty(val)) {
              this.active[val] = false;
            }
          }
          this.active[info] = true;
        }
      },
      loginIn() {
        this.$router.push({path: "/login"});
      },
      loginOut() {
        this.safeLoginOut();
        this.$router.push({path: "/login"});
      }
    },
    mounted() {
      let {username, token} = this.userInfo;
      if (username && token) {
        this.username = username;
        this.showLoginOut = true;
      } else {
        this.showLoginIn = true;
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*height: 60px;*/
    height: 10%;
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

  img:first-child {
    width: 100px;
    height: 100%;
  }

  .user {
    position: relative;
    height: 100%;
    text-align: center;
  }

  .user > img {
    width: 32px;
    height: 32px;
    position: relative;
    top: 50%;
    margin-top: -16px;
  }

  .user > ul {
    position: absolute;
    top: calc(100% - 20px);
    list-style: none;

  }

  .user > ul > li {
    width: 8em;
    text-align: center;
    background: gainsboro;
    padding: 5px 2px;
  }

  .user > ul > li > span {
    display: block;
    height: 16px;
    line-height: 16px;
  }

  .user > ul > li > span:hover {
    background: white;
  }

  .user > ul > li:first-child {
    width: 0;
    height: 0;
    margin-left: 6px;
    border: 10px solid transparent;
    border-bottom-color: silver;
    background: none;
    padding: 0;
  }

  .user > ul > li {
    border-radius: 0 0 4px 4px
  }

  .user > ul > li:nth-child(2) {
    border-radius: 0 4px 0 0;
  }

  .user > ul > li:first-child {
    border-radius: 0;
  }
</style>
