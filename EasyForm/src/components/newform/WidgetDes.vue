<template>
  <div class="widget-des">
    <p>基本设置</p>
    <p>标题</p>
    <input type="text" v-model="name">
    <p>文字描述</p>
    <textarea rows="3" v-model="description"></textarea>
    <p v-show="isDef">默认值</p>
    <input type="text" v-model="defaultValue" v-show="isDef && isText">
    <div class="date" v-show="isDef && isDate" @click="showPick">
      <input type="text" v-model="defaultValue" disabled> <img
      src="../../../static/images/date.png"
      alt="">
      <DatePicker class="date_picker" @pick-date="pickDate" v-if="isPick"></DatePicker>
    </div>
    <div class="time" v-show="isDef && isTime">
      <select name="hour" @change="pickHour">
        <option value="00">00</option>
        <option :value="v | format" v-for="v in 23" :key="v">{{v | format}}</option>
      </select>
      <span>:</span>
      <select name="minute" @change="pickMinute">
        <option value="00">00</option>
        <option :value="v | format" v-for="v in 59" :key="v">{{v | format}}</option>
      </select>

    </div>

  </div>
</template>

<script>
  import {mapMutations} from "vuex";
  import DatePicker from "@/components/base/DatePicker";

  export default {
    name: "WidgetDes",
    data() {
      return {
        isPick: false
      }
    },
    props: {
      component: {
        required: true
      }
    },
    components: {
      DatePicker
    },
    computed: {
      name: {
        get() {
          return this.component.name;
        },
        set(value) {
          this.update({prop: "name", value});
        }
      },
      description: {
        get() {
          return this.component.description;
        },
        set(value) {
          this.update({prop: "description", value});
        }
      },
      defaultValue: {
        get() {
          return this.component.defaultValue;
        },
        set(value) {
          this.update({prop: "defaultValue", value});
        }
      },
      isDef() {
        return this.component.defaultValue !== void 0;
      },
      isText() {
        return this.component.type === 0 || this.component.type === 1;
      },
      isDate() {
        return this.component.type === 6;
      },
      isTime() {
        return this.component.type === 5;
      }
    },
    methods: {
      ...mapMutations({update: "updateComponentSettings"}),
      pickDate(value) {
        this.update({prop: "defaultValue", value});
        this.isPick = false;

      },
      showPick() {
        this.isPick = !this.isPick;
      },
      pickHour(event) {
        let minute = this.component.defaultValue.substring(3);
        this.update({prop: "defaultValue", value: `${event.target.value}:${minute}`})
      },
      pickMinute(event) {
        let hour = this.component.defaultValue.substring(0, 2);
        this.update({prop: "defaultValue", value: `${hour}:${event.target.value}`});
      }
    },
    filters: {
      format(value) {
        return value < 10 ? `0${value}` : `${value}`;
      }
    }
  }
</script>

<style scoped>

  .widget-des > * {
    width: 100%;
    margin-top: 5px;

  }

  p:first-child {
    background: #EDEDEE;
  }

  .widget-des > input {
    height: 32px;
  }

  .date {
    /*background: url("../../../static/images/date.png") no-repeat right / 24px;*/
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  .date > input {
    height: 32px;
    border: 1px solid silver;
    border-right: none;
    background: white;
    width: calc(100% - 32px);
  }

  .date > input[disabled] {
    color: #000;
  }

  .date > img {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid silver;
    border-left: none;
  }

  .date_picker {
    position: absolute;
    top: 32px;
  }

  .time > select {
    width: 30%;
    height: 24px;
  }

</style>
