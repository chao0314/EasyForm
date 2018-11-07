<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <select name="" id="" class="select">
      <option value="selected" selected="selected">请选择</option>
      <option v-for="(v,i) in compDes.options" :key="i" :value="v.value">{{v.value}}</option>
    </select>
  </BaseWidget>
</template>

<script>
  import BaseWidget from "./BaseWidget";

  export default {
    name: "Select",
    props: {
      compDes: {
        required: true
      },
      preview: {
        type: Boolean
      }
    },
    components: {
      BaseWidget
    }
  }
</script>

<style scoped>
  .select{
    display: block;
    width: 100%;
    height: 32px;
  }
  .select > option {
  }
</style>
