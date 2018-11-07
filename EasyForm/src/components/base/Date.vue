<template>
  <BaseWidget :compDes="compDes" :preview="preview" class="date">
    <input type="text" disabled :value="compDes.defaultValue">
  </BaseWidget>
</template>

<script>
  import BaseWidget from "./BaseWidget";

  export default {
    name: "Date",
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
  .date > input {
    width: 100%;
    height: 32px;
    border: 1px solid silver;
    background: url("../../../static/images/date.png") no-repeat right / 24px;
  }
</style>
