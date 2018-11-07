<template>
  <div class="widget-option">
    <div class="content">
      <input type="text" v-model="optValue">
    </div>
    <div class="operate">
      <span @click="increment"></span>
      <span @click="remove"></span>
    </div>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: "WidgetOption",
    props: {
      options: {
        required: true
      },
      option: {
        required: true
      }
    },
    computed: {
      index() {
        return this.options.indexOf(this.option);
      },
      optValue: {
        get() {
          return this.option.value;
        },
        set(value) {
          this.updateOptions(1, {value});
        }
      }
    },
    methods: {
      ...
        mapMutations({
          update: "updateComponentSettings"
        }),
      increment() {
        this.updateOptions(1, this.option, {value: "选项内容"});
      },
      remove() {
        if (this.options.length > 2) {
          this.updateOptions(1)
        }
      },
      updateOptions(sum, ...payload) {
        let temp = this.options.slice();
        temp.splice(this.index, sum, ...payload);
        this.update({prop: "options", value: temp})
      }
    }
  }
</script>

<style scoped>
  .content {
    float: left;
  }

  .content > input {
    height: 32px;
    width: 140px;
  }

  .operate {
    height: 32px;
    line-height: 32px;
  }

  .operate span {
    width: 18px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    background: url("../../../static/images/design.png");

  }

  .operate span:first-child {
    background-position: -58px -10px;
  }

  .operate span:last-child {
    background-position: -34px -10px;
  }


</style>
