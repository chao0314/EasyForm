<template>
  <div class="list">
    <!--<div class="check-box">-->
      <!--<check-box-option id="id | formatId"></check-box-option>-->
    <!--</div>-->
    <span v-for=" v in message" class="message">{{v.name}}</span>
  </div>
</template>

<script>
  import CheckBoxOption from '@/components/base/CheckBoxOption';

  export default {
    name: "InstanceDataItem",
    filters: {
      formatId(value) {
        return `${this.prefix}${value}`;
      }
    },
    props: {
      id: {
        required: true
      },
      prefix: {
        default: "instance-data-"
      },
      message: {
        type: Array,
        require: true
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .list {
    position: relative;
  }

  .message {
    display: inline-block;
    min-width: 100px;
    height: 28px;
    border: 1px solid silver;
    border-left: none;
  }

  .check-box {
    display: flex;
    width: 32px;
    height: 28px;
    border: 1px solid silver;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding-bottom: 2px;
  }

  .check-box + .message {
    margin-left: 32px;
  }

</style>
