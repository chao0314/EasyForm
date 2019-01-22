<template>
  <div class="checkbox">
    <input type="checkbox" :id="id" class="btn-checkbox" :checked="checked" :disabled="disabled"
           @change="$emit('change',$event.target.checked)"><label :for="id"><span>{{message}}</span></label>
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
        default: ""
      },
      checked: {
        default: false,
        // type: Boolean
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
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
    /*background: pink;*/

  }

  input[class*="btn-checkbox"] + label:before {
    display: inline-block;
    content: '';
    width: 11px;
    height: 11px;
    border: 1px solid silver;
    line-height: 11px;
    vertical-align: middle;
    /*background: #000;*/
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

</style>
