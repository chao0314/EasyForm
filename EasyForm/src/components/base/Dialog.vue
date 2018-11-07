<template>
  <div class="dialog" v-show="show">
    <div>
      <p class="notice">
        <slot></slot>
      </p>
      <a @click="cancel" v-show="showCancel">取消</a><a @click="confirm" v-show="showConfirm">确认</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    data() {
      return {
        timeoutId: null
      }
    },
    computed: {
      show() {
        if (this.firstUpdated) {
          return this.showDialog;
        }
        return this.localShow;
      }
    },
    props: {
      showDialog: {
        default: false
      },
      showCancel: {
        default: true
      },
      showConfirm: {
        default: true
      },
      timeout: {
        type: Number
      }
    },
    methods: {
      cancel() {
        this.$emit("cancel");
      },
      confirm() {
        this.$emit("confirm");
      }
    },
    updated() {
      console.log("updated")
      if (this.timeout) {
        setTimeout(() => {
          console.log("timeout")
        }, this.timeout * 1000)
      }
    },
    mounted() {
      console.log("mounted")
    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
    filter: Alpha(opacity=90);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background: silver;
  }

  .dialog > div:first-child {
    background: white;
    width: 350px;
    border-radius: 5px;
    box-shadow: 0 0 8px white;
    margin: 5px;
  }

  .notice {
    min-height: 60px;
    border-bottom: 1px solid silver;
    text-align: center;
    padding-top: 10px;
  }

  .dialog > div:first-child > a {
    display: inline-block;
    text-align: center;
    width: calc(50% - 2px);
    height: 40px;
    line-height: 40px;
    background: white;
    border-radius: 2px;
    margin: 1px;
    font-weight: bold;
  }

  .dialog > div:first-child > a:active {
    background: silver;
    opacity: 0.5;
    filter: Alpha(Opacity=50);
  }


</style>
