<template>
  <div class="form-setting">
    <div class="base-setting">
      <p>基本设置</p>
      <p>标题</p>
      <input type="text" v-model="formTitle">
      <p>文字描述</p>
      <textarea placeholder="表单的简短描述" rows="3" v-model="desc"></textarea>
      <CheckBoxOption message="自动生成编号" id="FormSetting_1" v-model="serialNumber"></CheckBoxOption>
      <CheckBoxOption message="隐藏标题和描述" id="FormSetting_2" v-model="hiddenDes"></CheckBoxOption>
    </div>
  </div>
</template>

<script>
  import CheckBoxOption from "@/components/base/CheckBoxOption";
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "FormSetting",
    components: {
      CheckBoxOption
    },
    computed: {
      ...mapState({
        settings: "formSettings"
      }),
      serialNumber: {
        get() {
          return this.settings.serialNumber;
        },
        set(value) {
          this.update({prop: "serialNumber", value});
        }
      },
      hiddenDes: {
        get() {
          return this.settings.hiddenDes;
        },
        set(value) {
          this.update({prop: "hiddenDes", value});
        }
      },
      formTitle: {
        get() {
          return this.settings.title;
        },
        set(value) {
          this.update({prop: "title", value});
        }
      },
      desc: {
        get() {
          return this.settings.description;
        },
        set(value) {
          this.update({prop: "description", value});
        }
      }

    },
    methods: {
      ...mapMutations({
        update: "updateFormSettings"
      })
    }
  }
</script>

<style scoped>
  .base-setting {
    padding: 5px;
  }

  .base-setting > * {
    width: 100%;
    margin-top: 5px;
  }

  p:first-child {
    background: #EDEDEE;
  }

  .base-setting > input {
    height: 32px;
  }


</style>
