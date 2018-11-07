<template>
  <div class="widget-props">
    <WidgetDes :component="component"></WidgetDes>
    <WidgetOptions :component="component"></WidgetOptions>
    <WidgetValidate :component="component"></WidgetValidate>
  </div>
</template>

<script>
  import WidgetDes from "./WidgetDes";
  import WidgetOptions from "./WidgetOptions";
  import WidgetValidate from "./WidgetValidate";
  import {mapState} from "vuex";

  export default {
    name: "WidgetProps",
    computed: {
      ...mapState({component: "currentComponent"})
    },
    components: {
      WidgetDes,
      WidgetOptions,
      WidgetValidate
    }
  }
</script>

<style scoped>
  .widget-props {
    padding: 5px;
  }

  .widget-props > * {
    width: 100%;
  }
</style>
