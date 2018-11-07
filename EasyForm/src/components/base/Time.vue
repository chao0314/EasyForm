<template>
  <BaseWidget :compDes="compDes" :preview="preview">
    <div class="time">
      <input disabled type="text" :value="hour">
      <span>:</span>
      <input disabled type="text" :value="minute">
    </div>
  </BaseWidget>
</template>

<script>
  import BaseWidget from './BaseWidget';

  export default {
    name: "Time",
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
    },
    computed: {
      hour() {
        return this.compDes.defaultValue.substring(0, 2);
      },
      minute() {
        return this.compDes.defaultValue.substring(3);
      }
    }
  }
</script>

<style scoped>
  .time {
    display: flex;
    align-items: center;
  }

  .time > input {
    width: 15%;
    height: 28px;
    border: 1px solid silver;
    border-radius: 4px;
    text-align: center;
    background: white;
  }

  .time > span {
    margin: 0 10px;
  }


</style>
