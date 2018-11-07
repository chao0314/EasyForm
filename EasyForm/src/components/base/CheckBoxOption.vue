<template>
  <div class="checkbox">
    <input type="checkbox" :id="id" class="btn-checkbox" :checked="checked" :disabled="disabled"
           @change="$emit('change',$event.target.checked)">
    <label :for="id"><span>{{message}}</span></label>
  </div>

</template>

<script>
  export default {
    name: "CheckBoxOption",
    props: {
      id: {
        required: true
      },
      message: {
        required: true
      },
      checked: {
        default: false,
        type: Boolean
      },
      disabled: {
        default: false
      }
    },
    model: {
      prop: "checked",
      event: "change"
    }
  }
</script>

<style scoped>
  .checkbox {
    display: inline-block;
  }

  input[class*="btn-checkbox"] + label:before {
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid silver;
    line-height: 10px;
    vertical-align:middle;
  }

  input[class*="btn-checkbox"]:checked + label:before {
    content: "\2713";
    background: #588FD0;
    color: white;
  }

  input[class*="btn-checkbox"] + label > span {
    margin-left: 5px;

  }

  input[class*="btn-checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .checkbox span {
  }
</style>
