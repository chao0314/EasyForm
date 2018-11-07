<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <!--<span slot="name">{{compDes.name}}</span>-->
    <textarea disabled rows="3" :value="compDes.content" :placeholder="compDes.defaultValue"></textarea>
  </BaseWidget>
</template>

<script>
  import BaseWidget from "./BaseWidget";

  export default {
    name: "MultiText",
    props:{
      compDes:{
        required:true
      },
      preview:{
        type:Boolean
      }
    },
    components: {
      BaseWidget
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
    display: block;
    background: white;
  }

</style>
