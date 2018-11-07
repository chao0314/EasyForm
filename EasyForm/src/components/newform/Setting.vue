<template>
  <div class="setting">
    <Tabs>
      <Pane label="表单设置" class="pane">
        <FormSetting></FormSetting>
      </Pane>
      <Pane label="控件属性" class="pane" v-if="init">
        <WidgetProps></WidgetProps>
      </Pane>
      <Pane label="控件属性none" class="pane" special="none" v-else>
      </Pane>
    </Tabs>

  </div>
</template>

<script>
  import Tabs from "@/components/base/Tabs";
  import Pane from "@/components/base/Pane";
  import FormSetting from "./FormSetting";
  import WidgetProps from "./WidgetProps";
  import {mapState} from "vuex";

  export default {
    name: "Setting",
    components: {
      Tabs,
      Pane,
      FormSetting,
      WidgetProps
    },
    computed: {
      ...mapState({component: "currentComponent"}),
      init: function () {
        return this.component.type !== -1;
      }
    },
    watch: {
      init: function (newV) {
        this.handleInit(newV);
      }
    },
    methods: {
      click(ev) {
        ev.preventDefault();
      },
      handleInit(val) {
        this.$children.forEach((v) => {
          if (v.$options.name === "Tabs") {
            if (val) {
              v.handle(1);
            } else {
              v.handle(0);
            }

          }
        })
      }
    },
    mounted() {
      this.handleInit(this.init);
    }
  }
</script>

<style scoped>
  .setting {
    /*flex: 1 1 auto;*/
    /*max-width: 25%;*/
    float: right;
    width: 25%;
    overflow-y: auto;
    height: 100%;
  }

</style>
