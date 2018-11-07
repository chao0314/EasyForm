<template>
  <div class="wrap">
    <div class="login">
      <div class="logo">
        <img src="../../../static/images/ca_logo.png" alt="EasyForm">
        <h2>登录</h2>
      </div>
      <div class="info">
        <span>手机号</span>
        <input type="text" v-model="username">
        <span>密码</span>
        <input type="password" v-model="password">
      </div>
      <div class="footer">
        <a @click="login">登录</a>
      </div>
    </div>
    <Shade v-show="loading"></Shade>
    <Dialog :showDialog="showDialog" :showCancel="false">
      {{dialogMsg}}
    </Dialog>
  </div>
</template>

<script>
  import Shade from './Shade';
  import Dialog from './Dialog';
  import {mapActions} from "vuex";

  export default {
    name: "Login",
    data: function () {
      return {
        username: "",
        password: "",
        loading: false,
        showDialog:false,
        dialogMsg: "",
        from: ""
      }
    },
    methods: {
      ...mapActions({loginAsync: "login"}),
      login() {
        this.loading = true;
        this.loginAsync({username: this.username, password: this.password}).then((res) => {
            this.loading = false;
            if (res.status) {
              this.$router.push({path: this.from});
            } else {
              this.showDialog = true;
              this.dialogMsg = res.message;
            }
          }
        )
      }
    },
    components: {
      Shade,
      Dialog
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.from = from.path;
      });
    }
  }
</script>

<style scoped>
  .wrap {
    height: 100%;
    background: #F6F6F6;
  }

  .login {
    width: 35%;
    height: 80%;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #FFFFFF;
  }

  .logo {
    text-align: center;
  }

  .logo > h2 {
    font-size: 20px;
    color: #515151;
    font-weight: normal;
    margin: 15px auto;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info > span {

    display: inline-block;
    width: 60%;
    height: 30px;
    vertical-align: middle;
    line-height: 30px;
  }

  .info > input {
    width: 60%;
    height: 30px;
    background: #FAFFBD;
    border: 1px solid silver;
  }

  .footer {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer > a {
    display: inline-block;
    width: 140px;
    height: 40px;
    background: #FB8C00;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: white;
  }

  .footer > a:hover {
    box-shadow: 0 0 6px #FB8C00;
  }

</style>
