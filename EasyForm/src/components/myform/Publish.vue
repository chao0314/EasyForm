<template>
  <div class="publish">
    <div class="menu">
      <router-link to="/formdetail/publish/mode" :class="['link',{active:active.mode}]"
                   @click.native="switchStyle('mode')">发布方式
      </router-link>
      <router-link to="/formdetail/publish/enable" :class="['link',{active:active.enable}]"
                   @click.native="switchStyle('enable')">启停表单
      </router-link>
    </div>
    <router-view class="panel"></router-view>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    name: "Publish",
    data() {
      return {
        active: {
          mode: false,
          enable: false
        }
      }
    },
    methods: {
      ...mapActions({getUrl: "getformUrlById"}),
      ...mapMutations({saveUrl: "saveFormUrl"}),
      switchStyle(prop) {
        if (!this.active[prop]) {
          for (let p in this.active) {
            if (this.active.hasOwnProperty(p)) {
              this.active[p] = false;
            }
          }
          this.active[prop] = true;
        }
      }
    },
    created() {
      this.getUrl({id: this.$route.query.id}).then(res => {
        this.saveUrl({formUrl: res})
      });
    },
    mounted() {
      for (let prop in this.active) {
        if (this.active.hasOwnProperty(prop) && this.$route.path.match(prop)) {
          this.active[prop] = true;
        }
      }

    }
  }
</script>

<style scoped>
  .publish {
    position: relative;
  }

  .menu {
    position: absolute;
    background: white;
    width: 20%;
    height: 84px;
    text-align: center;
    margin-left: 20px;
  }

  .link {
    display: block;
    height: 42px;
    line-height: 42px;
    text-decoration: none;
    color: #000;
  }

  .link:hover {
    background: #E6E6E6;
  }

  .panel {
    background: white;
    width: 70%;
    /*height: 200px;*/
    min-height: 100px;
    margin-left: 25%;
  }

  .active {
    background: #E6E6E6;
  }


</style>
