<template>
  <div class="widget-options" v-show="isShow">
    <p>选项设置</p>
    <WidgetOption v-for="(v,i) in component.options" :key="i" :options="component.options"
                  :option="v"></WidgetOption>
  </div>
</template>

<script>
  import WidgetOption from "./WidgetOption";

  export default {
    name: "WidgetOptions",
    props: {
      component: {
        required: true
      }
    },
    computed: {
      isShow() {
        return !!this.component.options
      }
    },
    components: {
      WidgetOption
    }
  }
</script>

<style scoped>

  .widget-options > * {
    margin-top: 5px;

  }

  p:first-child {
    background: #EDEDEE;
  }

</style>
