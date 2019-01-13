<template>
  <div class="enable">
    <div>
      <span>启停表单</span>
      <SwitchEnable sid="enable" :init="init"></SwitchEnable>
    </div>

  </div>
</template>

<script>
  import SwitchEnable from "@/components/base/SwitchEnable";

  export default {
    name: "OnAndOff",
    data: function () {
      return {
        init: true
      }
    },
    components: {
      SwitchEnable
    }
  }
</script>

<style scoped>
  .enable{
    padding: 20px 10px;
  }
  .enable > div:first-child {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .enable >div:first-child>span{
    display: inline-block;
    height: 18px;
    line-height: 18px;
    margin-right: 5px;
  }


</style>
