<template>
  <div class="tabs">
    <div class="label-container">
      <div v-for="(tab,index) in tabList" :key="index" @click="handle(index) "
           :class="['label',{active:isActive(index)}]"
           :style="{width:adjustWidth,display:tab.$props.special}">
        {{tab.$props.label}}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    data: function () {
      return {
        tabList: [],
        current: 0

      }
    },
    computed: {
      adjustWidth: function () {
        return `${100 / (this.tabList.length || 2)}%`
      }
    },
    methods: {
      getTabs() {
        return this.$children.filter(value => value.$options.name.toLowerCase() === "pane")
      },
      isActive(index) {
        return parseInt(index) === this.current;
      },
      handle(index) {
        this.current = parseInt(index);
        this.tabList.forEach((value, i) => {
          value.show = (i === this.current);

        })

      },
    },
    mounted: function () {
      this.tabList = this.getTabs();
      this.handle(this.current);

    }
  }
</script>

<style scoped>
  .label-container {
    display: flex;
    justify-content: center;
  }

  .label {
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #F6F6F7;
  }

  .active {
    background: white;
  }

</style>
