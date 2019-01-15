<template>
  <div class="container">
    <input disabled type="text" :value="settings.hiddenDes ? '':settings.title">
    <textarea disabled :value="settings.hiddenDes ? '':settings.description" rows="2"></textarea>
    <component v-for="v in componentList" :key="v.id" :is="v.value" :compDes="v" v-drag
               @dragstart.native="dragstart(v,$event)" @drop.native="drop(v,$event)" @click.native="click(v)">
    </component>
    <MyFooter class="footer"></MyFooter>
  </div>
</template>

<script>
  import MyFooter from './MyFooter';
  import SingleText from '@/components/base/SingleText';
  import MultiText from '@/components/base/MultiText';
  import Radio from '@/components/base/Radio';
  import CheckBox from '@/components/base/CheckBox';
  import Select from '@/components/base/Select';
  import Date from '@/components/base/Date';
  import Time from '@/components/base/Time';
  import {mapState, mapGetters, mapMutations} from 'vuex';

  export default {
    name: "Container",
    data: function () {
      return {}
    },
    computed: {
      ...mapState({componentList: "components", currentComponent: "currentComponent", settings: "formSettings"}),
      ...mapGetters({getComponent: "getComponent"})
    },
    components: {
      MyFooter,
      SingleText,
      MultiText,
      Radio,
      CheckBox,
      Select,
      Date,
      Time
    },
    methods: {
      ...mapMutations({
        insert: "insert",
        remove: "remove",
        switchCurrent: "switchCurrent"
      }),
      dragstart(comp, ev) {
        ev.dataTransfer.setData("text/plain", comp.number);

      },
      drop(comp, ev) {
        let moved = this.getComponent(ev.dataTransfer.getData("text/plain"));
        this.insert({prev: comp, component: moved});
        this.remove({component: moved});
        this.switchCurrent({component: moved});
      },
      click(comp) {
        this.switchCurrent({component: comp});
      }
    }
  }
</script>

<style scoped>
  .container {
    float: left;
    width: 50%;
    overflow-y: auto;
    border: 12px solid #364760;
    border-bottom: none;
    height: calc(100% - 46px);
    text-align: center;
  }

  .container > div:first-child {
    overflow-y: scroll;
  }

  .container > input, textarea {
    text-align: center;
    border: none;
    background: #5B90CF;
    width: 100%;
  }

  input:first-child {
    height: 36px;
    color: white;
  }

  input + textarea {
    margin-bottom: 8px;
  }

  .footer {
    position: absolute;
    bottom: 0;
  }

</style>
