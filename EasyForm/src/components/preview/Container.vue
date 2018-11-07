<template>
  <div class="container">
    <input type="text" :value="settings.hiddenDes ? '':settings.title">
    <textarea :value="settings.hiddenDes ? '':settings.description" rows="2"></textarea>
    <component v-for="v in componentList" :key="v.id" :is="v.value" :compDes="v" :preview="true"></component>
    <!--<div class="mask"></div>-->
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import SingleText from '@/components/base/SingleText';
  import MultiText from '@/components/base/MultiText';
  import Radio from '@/components/base/Radio';
  import CheckBox from '@/components/base/CheckBox';
  import Select from '@/components/base/Select';
  import Date from '@/components/base/Date';
  import Time from '@/components/base/Time';

  export default {
    name: "Container",
    computed: {
      ...mapState({settings: "formSettings", componentList: "components"})
    },
    components: {
      SingleText,
      MultiText,
      Radio,
      CheckBox,
      Select,
      Date,
      Time
    }
  }
</script>

<style scoped>
  .container {
    min-height: calc(100% - 48px);
    text-align: center;
    background: white;
  }

  /*.container > div:first-child {*/
  /*overflow-y: scroll;*/
  /*}*/

  .container > input, textarea {
    text-align: center;
    border: none;
    background: #5B90CF;
    width: 100%;
  }

  input:first-child {
    height: 36px;
    color: white;
  }

  input + textarea {
    margin-bottom: 8px;
  }

  .mask {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    background: red;
  }

  .container .base-widget-img:hover img {
    display: none;
  }

</style>
