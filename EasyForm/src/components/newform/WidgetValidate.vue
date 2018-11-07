<template>
  <div class="validate">
    <p>校验</p>
    <CheckBoxOption message="此项必填" id="WidgetValidate_1" v-model="required"></CheckBoxOption>
  </div>
</template>

<script>
  import CheckBoxOption from "@/components/base/CheckBoxOption";
  import {mapMutations} from "vuex";

  export default {
    name: "WidgetValidate",
    props: {
      component: {
        required: true
      }
    },
    computed: {
      required: {
        get() {
          return this.component.validate.required;
        },
        set(value) {
          this.update({prop: "validate", value: Object.assign({}, this.component.validate, {required: value})});
        }
      }
    },
    methods: {
      ...mapMutations({update: "updateComponentSettings"})
    },
    components: {
      CheckBoxOption
    }
  }
</script>

<style scoped>
  .validate > * {
    width: 100%;
    margin-top: 5px;

  }

  p:first-child {
    background: #EDEDEE;
  }

  .validate > input {
    height: 24px;
  }

</style>
