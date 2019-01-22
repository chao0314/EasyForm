<template>
  <div class="check-box-list" @change="selectHanle(value,e)">
    <check-box-option v-for="v in listLength" :key="v" :id="v | formatId" :data-number="v"></check-box-option>
  </div>
</template>

<script>
  import CheckBoxOption from '@/components/base/CheckBoxOption';

  export default {
    name: "CheckBoxList",
    filters: {
      formatId(value) {
        return `instance-data-${value}`;
      }
    },
    methods: {
      selectHanle(v, e) {
        console.log("select", v, e);
      }
    },
    props: {
      listLength: {
        required: true
      },
      prefix: {
        default: "instance-data-"
      }
    },
    components: {
      CheckBoxOption
    }
  }
</script>

<style scoped>
  .check-box-list{
    display: flex;
    flex-direction: column;
  }

</style>
