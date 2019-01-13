<template>
  <div class="switch" @click="click">
    <input type="checkbox" :id="sid"><label :for="sid" :class="{'init':initLocal}"></label>
  </div>
</template>

<script>
  export default {
    name: "SwitchEnable",
    data: function () {
      return {
        initLocal: this.init
      }
    },
    props: {
      sid: {
        required: true
      },
      init: {
        default: true
      }
    },
    methods: {
      click(e) {
        this.initLocal = !this.initLocal;
        this.$emit("switch", this.initLocal);
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  .switch > input:first-child {
    display: none;
  }

  .switch > label:nth-child(2) {
    display: inline-block;
    position: relative;
    width: 34px;
    height: 18px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid silver;
    transition: background-color 0.8s;
  }

  .switch > label:nth-child(2):before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: white;
    border: 1px solid silver;
    left: 0;
    box-sizing: border-box;
    transition: left 0.2s;
  }

  /*.switch > input:checked + label:before {*/
  /*left: 18px;*/
  /*}*/

  /*.switch > input:checked + label {*/
  /*background: #5B90CF;*/
  /*}*/


  .switch > label.init {
    background: #5B90CF;
  }

  .switch > label.init:before {
    left: 16px;
  }
</style>
