<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <!--<span slot="name">{{compDes.name}}</span>-->
    <input disabled type="text" :value="compDes.defaultValue">
  </BaseWidget>

</template>

<script>
  import BaseWidget from "./BaseWidget";

  export default {
    name: "SingeText",
    props: {
      compDes: {
        require: true
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
  input {
    width: 100%;
    height: 32px;
    background: white;
    border: 1px solid silver;
  }
</style>
