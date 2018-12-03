<template>
  <div class="dialog" v-if="showDialog">
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
        first: true
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
      time: {
        type: Number
      }
    },
    methods: {
      cancel() {
        this.$emit("update:showDialog", false);
        this.$emit("cancel");
      },
      confirm() {
        this.$emit("update:showDialog", false);
        this.$emit("confirm");
      },
      timeout() {
        this.$emit("update:showDialog", false);
        this.$emit("timeout")
      }
    },
    beforeUpdate() {
      if (this.time && this.first) {
        setTimeout(() => {
          this.timeout();
        }, this.time * 1000)
      }
    },
    updated() {
      this.first = !this.first;
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
    text-align: center;
  }

  .notice {
    min-height: 60px;
    line-height: 50px;
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
