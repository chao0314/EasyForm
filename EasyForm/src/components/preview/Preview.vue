<template>
  <div class="preview">
    <PreHeader :active="active"></PreHeader>
    <router-view></router-view>
  </div>

</template>

<script>
  import PreHeader from "./PreHeader";
  import {mapState, mapMutations} from "vuex";

  export default {
    name: "Preview",
    data: function () {
      return {
        active: "Computer",
        copyCurrent: null
      }
    },
    computed: {
      ...mapState({currentComponent: "currentComponent"})
    },
    methods: {
      ...mapMutations({switchCurrent: "switchCurrent"})
    },
    components: {
      PreHeader
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.copyCurrent = vm.currentComponent;
        vm.switchCurrent({component: null});
      });
    },
    beforeRouteUpdate(to, from, next) {
      let pathArr = to.fullPath.split("/");
      this.active = pathArr[pathArr.length - 1];
      next();
    },
    beforeRouteLeave(to, from, next) {
      this.switchCurrent({component: this.copyCurrent});
      next();
    }
  }
</script>

<style scoped>
  .preview {
    height: 100%;
  }

</style>
