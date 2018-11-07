<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <RadioOption v-for="(v,i) in compDes.options" :key="i" :option="v"></RadioOption>
  </BaseWidget>
</template>

<script>
  import BaseWidget from "./BaseWidget";
  import RadioOption from "./RadioOption";

  export default {
    name: "RadioGroup",
    props: {
      compDes: {
        required: true
      },
      preview: {
        type: Boolean
      }
    },
    components: {
      BaseWidget,
      RadioOption
    }
  }
</script>

<style scoped>

</style>
