<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <div class="checkbox">
      <CheckBoxOption v-for="(v,i) in compDes.options" :key="i" :message="v.value" :id="i" disabled="true"></CheckBoxOption>
    </div>
  </BaseWidget>
</template>

<script>
  import BaseWidget from "./BaseWidget";
  import CheckBoxOption from "./CheckBoxOption";

  export default {
    name: "CheckBox",
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
      CheckBoxOption
    }
  }
</script>

<style scoped>
  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
