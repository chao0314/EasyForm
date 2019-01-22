<template>
  <ul class="check-box-list" @change="selectHanle">
    <li v-for="v in list" :key="v">
      <check-box-option :id="v" prefix="instance-data-"></check-box-option>
    </li>
  </ul>
</template>

<script>
  import CheckBoxOption from '@/components/base/CheckBoxOption';

  export default {
    name: "CheckBoxList",

    methods: {
      selectHanle(e) {
        console.log("select", e.target.checked, e.target.getAttribute("data-number"));
      }
    },
    props: {
      list: {
        required: true
      }
    },
    components: {
      CheckBoxOption
    }
  }
</script>

<style scoped>
  .check-box-list {
    list-style-type: none;
  }

  .check-box-list > li {
    width: 32px;
    height: 28px;
    border: 1px solid silver;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .check-box-list > li:first-child {
    margin-top: 0;
  }


</style>
